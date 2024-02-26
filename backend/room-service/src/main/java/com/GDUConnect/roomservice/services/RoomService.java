package com.GDUConnect.roomservice.services;

import com.GDUConnect.roomservice.dtos.requests.PostDTO;
import com.GDUConnect.roomservice.dtos.requests.UserDTO;
import com.GDUConnect.roomservice.dtos.responses.PostResponse;
import com.GDUConnect.roomservice.models.ImageModel;
import com.GDUConnect.roomservice.models.PostModel;
import com.GDUConnect.roomservice.repository.ImageRepository;
import com.GDUConnect.roomservice.repository.PostRepository;
import com.cloudinary.Cloudinary;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomService {
    private final PostRepository postRepository;
    private final ImageRepository imageRepository;
    private final Cloudinary cloudinary;
    private final WebClient.Builder webClientBuilder;

    /**
     * Creates a new post based on the provided PostDTO
     * @param postDTO the post data transfer object
     * @return ResponseEntity with a message indicating successful creation
     * @throws IOException if there is an error in processing the post
     */
    public ResponseEntity<String> createPost(PostDTO postDTO) throws IOException {
        // Create a PostModel from the PostDTO
        PostModel postModel = PostModel.builder()
                .title(postDTO.getTitle())
                .price(postDTO.getPrice())
                .area(postDTO.getArea())
                .ward(postDTO.getWard())
                .district(postDTO.getDistrict())
                .description(postDTO.getDescription())
                .userId(postDTO.getUserId())
                .facebook(postDTO.getFacebook())
                .phoneNumber(postDTO.getPhoneNumber())
                .createdAt(LocalDate.now())
                .build();

        // Save the post to the repository and get the new post ID
        Long newPostId = postRepository.save(postModel).getId();

        // If there are images associated with the post, save them
        if (postDTO.getImage() != null) {
            saveImages(postDTO.getImage(), newPostId);
        }
        return ResponseEntity.ok().body("Room created successfully");
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

        // return the URL of the uploaded image
        return result.get("url").toString();
    }

    /**
     * Retrieves all posts from the database and converts them into a list of PostResponse objects.
     * @return List of PostResponse objects
     * @throws RuntimeException if there is an error retrieving the posts
     */
    public List<PostResponse> getAllPosts() {
        try {
            // Retrieve all post models from the repository
            List<PostModel> postModelList = postRepository.findAll();

            // Convert List<PostModel> to List<PostResponse>
            return postModelList.stream()
                    .map(postModel -> PostResponse.builder()
                            .id(postModel.getId())
                            .title(postModel.getTitle())
                            .price(postModel.getPrice())
                            .area(postModel.getArea())
                            .ward(postModel.getWard())
                            .district(postModel.getDistrict())
                            .description(postModel.getDescription())
                            .phoneNumber(postModel.getPhoneNumber())
                            .facebook(postModel.getFacebook())
                            .userId(retrieveUserId(postModel.getUserId()))
                            .createdAt(postModel.getCreatedAt())
                            .image(postModel.getImages())
                            .build())
                    .collect(Collectors.toList());
        } catch (Exception e) {
            // Handle the exception and provide an error message
            throw new RuntimeException("Failed to get all posts: " + e.getMessage());
        }
    }


    /**
     * Delete a post with the given id if it exists and belongs to the specified user.
     * @param id The id of the post to delete
     * @param userId The id of the user
     * @return ResponseEntity with a success message if the post is deleted, or an error message if the post is not found
     */
    public ResponseEntity<String> deletePostWithId(Long id, Long userId) {
        // Check if the post exists and belongs to the specified user
        PostModel existingPost = postRepository.findPostModelById(id);
        if (existingPost != null && userId == existingPost.getUserId()) {
            postRepository.deleteById(id);
            return ResponseEntity.ok("Delete successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Cannot find post with id " + id);
        }
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

    /**
     * Retrieve post details by ID
     * @param id The ID of the post
     * @return The post details
     * @throws EntityNotFoundException if the post with the given ID is not found
     */
    public PostResponse getPostWithId(Long id) {
        // Retrieve the existing post from the repository by ID
        PostModel existingPost = postRepository.findPostModelById(id);
        // Throw EntityNotFoundException if the post is not found
        if (existingPost == null) {
            throw new EntityNotFoundException("PostModel not found with ID: " + id);
        }
        // Build and return the post response with the existing post details
        return PostResponse.builder()
                .title(existingPost.getTitle())
                .price(existingPost.getPrice())
                .area(existingPost.getArea())
                .ward(existingPost.getWard())
                .district(existingPost.getDistrict())
                .description(existingPost.getDescription())
                .phoneNumber(existingPost.getPhoneNumber())
                .facebook(existingPost.getFacebook())
                .userId(retrieveUserId(existingPost.getUserId()))
                .createdAt(existingPost.getCreatedAt())
                .image(existingPost.getImages())
                .build();
    }

    /**
     * Retrieves a list of PostResponse objects based on the given district and ward.
     * If ward is not null, filters the results by ward.
     *
     * @param district the district to filter by
     * @param ward the ward to filter by (can be null)
     * @return a list of PostResponse objects
     */
    public List<PostResponse> findByPlace(String district, String ward) {
        // Retrieve posts by district
        List<PostModel> findByDistrict = postRepository.findByDistrict(district);

        // If ward is not null, filter the results by ward
        if (ward != null) {
            findByDistrict = findByDistrict.stream()
                    .filter(postModel -> postModel.getWard().equals(ward))
                    .toList();
        }

        // Map PostModel objects to PostResponse objects and collect them into a list
        return findByDistrict.stream()
                .map(postModel -> PostResponse.builder()
                        .id(postModel.getId())
                        .title(postModel.getTitle())
                        .price(postModel.getPrice())
                        .area(postModel.getArea())
                        .ward(postModel.getWard())
                        .district(postModel.getDistrict())
                        .description(postModel.getDescription())
                        .phoneNumber(postModel.getPhoneNumber())
                        .facebook(postModel.getFacebook())
                        .userId(retrieveUserId(postModel.getUserId()))
                        .createdAt(postModel.getCreatedAt())
                        .image(postModel.getImages())
                        .build())
                .collect(Collectors.toList());
    }
}
