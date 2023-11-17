package com.GDUConnect.postservice.Service;

import com.GDUConnect.postservice.DTO.PostDTO;
import com.GDUConnect.postservice.Model.PostModel;
import com.GDUConnect.postservice.Repository.PostRepository;
import com.cloudinary.Cloudinary;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PostService {
    private final Cloudinary cloudinary;
    private final WebClient.Builder webClientBuilder;
    private final PostRepository postRepository;


    public ResponseEntity<String> createPost(PostDTO postDTO) throws IOException {
        int user = webClientBuilder.build().get().uri("http://user-service/api/v1/user/" + postDTO.getUserId()).retrieve().bodyToMono(int.class).block();
        if (user == -1) {
            return ResponseEntity.badRequest().body("Cannot find user!");
        }

        // Upload image to Cloundiary
        String imageURL = cloudinary.uploader()
                .upload(postDTO.getFile().getBytes(),
                        Map.of("public_id", UUID.randomUUID().toString()))
                .get("url")
                .toString();

        PostModel postModel = PostModel.builder()
                .userId(user)
                .content(postDTO.getContent())
                .imageURL(imageURL)
                .build();
        postRepository.save(postModel);
        return ResponseEntity.ok().body("Created post successfully!");
    }
}
