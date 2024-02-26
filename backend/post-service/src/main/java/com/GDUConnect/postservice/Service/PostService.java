package com.GDUConnect.postservice.Service;

import com.GDUConnect.postservice.DTO.CommentDTO;
import com.GDUConnect.postservice.DTO.PostDTO;
import com.GDUConnect.postservice.DTO.UserDTO;
import com.GDUConnect.postservice.Event.PostEvent;
import com.GDUConnect.postservice.Model.CommentModel;
import com.GDUConnect.postservice.Model.ImageModel;
import com.GDUConnect.postservice.Model.PostModel;
import com.GDUConnect.postservice.Repository.CommentRepository;
import com.GDUConnect.postservice.Repository.ImageRepository;
import com.GDUConnect.postservice.Repository.PostRepository;
import com.GDUConnect.postservice.Response.CommentResponse;
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
import java.util.stream.Collectors;

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

    /**
     * Creates a new post based on the provided PostDTO.
     *
     * @param postDTO The PostDTO containing the details of the post.
     * @return A ResponseEntity with a success message if the post is created successfully, or a bad request message if the user cannot be found.
     * @throws IOException If there is an error while saving the post images.
     */
    public ResponseEntity<String> createPost(PostDTO postDTO) throws IOException {
        // Retrieve the user based on the userId from the postDTO
        log.info(String.valueOf(postDTO.getUserId()));
        UserDTO user = retrieveUserId(postDTO.getUserId());
        // If the user cannot be found, return a bad request response
        if (user == null) {
            return ResponseEntity.badRequest().body("Cannot find user!");
        }

        // Create a new PostModel with the details from the postDTO
        PostModel postModel = PostModel.builder()
                .user(postDTO.getUserId())
                .content(postDTO.getContent())
                .groupId(postDTO.getGroupId())
                .build();

        // Save the post to the repository and get the new post ID
        Long newPostId = postRepository.save(postModel).getId();

        if (postDTO.getFile() != null) {
            // Save the images associated with the post
            saveImages(postDTO.getFile(), newPostId);
        }

        // Send a success notification event to the notificationTopic Kafka topic
        kafkaTemplate.send("notificationTopic", new PostEvent("Success"));

        // Return a success response
        return ResponseEntity.ok().body("Created post successfully!");
    }

    public List<PostResponse> getAllPosts() {
        List<PostModel> postModelList = postRepository.getAllOrderByIdDesc();

        // Convert List<PostModel> to List<PostResponse>
        return postModelList.stream()
                .map(this::convertToPostResponse)
                .collect(Collectors.toList());
    }

    /**
     * Converts a PostModel object to a PostResponse object.
     *
     * @param postModel The PostModel object to convert.
     * @return The converted PostResponse object.
     */
    private PostResponse convertToPostResponse(PostModel postModel) {
        // Retrieve the user details
        UserDTO user = retrieveUserId(postModel.getUser());

        // Retrieve the comments of the post
        List<CommentModel> commentsOfPost = commentRepository.findCommentModelByPostId(postModel);

        // Map CommentModel objects to CommentResponse objects
        List<CommentResponse> commentResponses = commentsOfPost.stream()
                .map(commentModel -> CommentResponse.builder()
                        .id(commentModel.getId())
                        .user(user)
                        .content(commentModel.getContent())
                        .imageURL(commentModel.getImgURL())
                        .createdAt(commentModel.getCreatedAt())
                        .build())
                .collect(Collectors.toList());

        // Build and return the PostResponse object
        return PostResponse.builder()
                .id(postModel.getId())
                .user(user)
                .content(postModel.getContent())
                .images(postModel.getImages())
                .comments(commentResponses)
                .likes(postModel.getLikes())
                .build();
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

    /**
     * Creates a comment for a post.
     *
     * @param commentDTO The comment data transfer object.
     * @param id         The ID of the post.
     * @return The response entity with the result of creating the comment.
     * @throws IOException If there is an error uploading the image.
     */
    public ResponseEntity<?> createComment(CommentDTO commentDTO, long id) throws IOException {
        // Find the existing post
        PostModel existingPost = postRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Cannot find your post"));

        // If the comment contains an image
        if (commentDTO.getImage() != null) {
            // Get the image file from the comment DTO
            MultipartFile imageFile = commentDTO.getImage();

            // Upload the image to Cloudinary and get the image URL
            String imageURL = uploadImageToCloudinary(imageFile);

            // Create the comment model with image
            CommentModel comment = CommentModel.builder()
                    .postId(existingPost)
                    .content(commentDTO.getContent())
                    .userId(commentDTO.getUserId())
                    .imgURL(imageURL)
                    .build();

            // Save the comment with image
            commentRepository.save(comment);
        } else {
            // Create the comment model without image
            CommentModel comment = CommentModel.builder()
                    .postId(existingPost)
                    .content(commentDTO.getContent())
                    .userId(commentDTO.getUserId())
                    .imgURL(null)
                    .build();

            // Save the comment without image
            commentRepository.save(comment);
        }

        // Return the response entity with a success message
        return ResponseEntity.ok().body("create comment successfully");
    }

    // get user api
    private UserDTO retrieveUserId(int userId) {
        return webClientBuilder.build()
                .get()
                .uri("http://user-service/api/v1/user/" + userId)
                .retrieve()
                .bodyToMono(UserDTO.class)
                .block();
    }

    // save image into repository
    private void saveImages(List<MultipartFile> files, Long postId) throws IOException {
        PostModel postModelOptional = postRepository.findById(postId).orElseThrow(() -> new EntityNotFoundException("PostModel not found with ID: " + postId));
        for (MultipartFile file : files) {
            String imageURL = uploadImageToCloudinary(file);
            ImageModel newImageModel = ImageModel.builder()
                    .postId(postModelOptional)
                    .imageURL(imageURL)
                    .build();
            imageRepository.save(newImageModel);
        }
    }

    /**
     * Uploads an image file to Cloudinary and returns the URL of the uploaded image.
     *
     * @param file The image file to upload.
     * @return The URL of the uploaded image.
     * @throws IOException If an I/O error occurs.
     */
    private String uploadImageToCloudinary(MultipartFile file) throws IOException {
        // Generate a random public ID for the uploaded image
        String publicId = UUID.randomUUID().toString();

        // Upload the image file to Cloudinary
        Map<String, Object> options = new HashMap<>();
        options.put("public_id", publicId);
        Map<String, Object> result = cloudinary.uploader().upload(file.getBytes(), options);

        // Get the URL of the uploaded image
        String imageUrl = result.get("url").toString();

        return imageUrl;
    }
}
