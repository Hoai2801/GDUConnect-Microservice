package com.GDUConnect.postservice.Service;

import com.GDUConnect.postservice.DTO.CommentDTO;
import com.GDUConnect.postservice.DTO.PostDTO;
import com.GDUConnect.postservice.Event.PostEvent;
import com.GDUConnect.postservice.Model.CommentModel;
import com.GDUConnect.postservice.Model.ImageModel;
import com.GDUConnect.postservice.Model.PostModel;
import com.GDUConnect.postservice.Repository.CommentRepository;
import com.GDUConnect.postservice.Repository.ImageRepository;
import com.GDUConnect.postservice.Repository.PostRepository;
import com.GDUConnect.postservice.Response.PostResponse;
import com.cloudinary.Cloudinary;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.util.*;

@Service
@RequiredArgsConstructor
@Slf4j
public class PostService {

    private final Cloudinary cloudinary;
    private final WebClient.Builder webClientBuilder;
    private final PostRepository postRepository;
    private final KafkaTemplate<String, PostEvent> kafkaTemplate;
    private final ImageRepository imageRepository;
    private final CommentRepository commentRepository;

    public ResponseEntity<String> createPost(PostDTO postDTO) throws IOException {
        int user = retrieveUserId(postDTO.getUserId());
        if (user == -1) {
            return ResponseEntity.badRequest().body("Cannot find user!");
        }

        PostModel createdPost = savePost(user, postDTO.getContent());
        saveImages(postDTO.getFile(), createdPost.getId());

        kafkaTemplate.send("notificationTopic", new PostEvent("Success"));
        return ResponseEntity.ok().body("Created post successfully!");
    }

    public List<PostModel> getAllPosts() {
        return postRepository.findAll();
    }

    public PostModel getPostWithId(Long id) {
        return postRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Cannot find your post"));
    }

    public void deletePostWithId(Long id) {
        PostModel existingPost = postRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Cannot find your post"));
        postRepository.delete(existingPost);
    }

    public void deleteCommentWithId(Long id) {
        CommentModel existingComment = commentRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Cannot find your comment"));
        commentRepository.delete(existingComment);
    }

    public CommentModel createComment(CommentDTO commentDTO, long id) {
        PostModel existingPost = postRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Cannot find your post"));
        CommentModel comment = CommentModel.builder()
                .postId(existingPost)
                .content(commentDTO.getContent())
                .userId(commentDTO.getUserId())
                .build();
        return commentRepository.save(comment);
    }

    // get user api
    private int retrieveUserId(int userId) {
        return webClientBuilder.build()
                .get()
                .uri("http://user-service/api/v1/user/" + userId)
                .retrieve()
                .bodyToMono(Integer.class)
                .block();
    }

    // save post into repository
    private PostModel savePost(int userId, String content) {
        PostModel postModel = PostModel.builder()
                .userId(userId)
                .content(content)
                .build();
        return postRepository.save(postModel);
    }

    // save image into repository
    private void saveImages(List<MultipartFile> files, Long postId) throws IOException {
        PostModel postModelOptional = postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("PostModel not found with ID: " + postId));;
        for (MultipartFile file : files) {
            String imageURL = uploadImageToCloudinary(file);
            ImageModel newImageModel = ImageModel.builder()
                    .postId(postModelOptional)
                    .imageURL(imageURL)
                    .build();
            imageRepository.save(newImageModel);
        }
    }

    private String uploadImageToCloudinary(MultipartFile file) throws IOException {
        return cloudinary.uploader()
                .upload(file.getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("url")
                .toString();
    }
}
