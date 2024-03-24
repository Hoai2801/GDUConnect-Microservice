package com.GDUConnect.roomservice.controllers;

import com.GDUConnect.roomservice.dtos.requests.PostDTO;
import com.GDUConnect.roomservice.dtos.responses.PostResponse;
import com.GDUConnect.roomservice.models.PostModel;
import com.GDUConnect.roomservice.services.RoomService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/room")
@RequiredArgsConstructor
@Slf4j
public class RoomController {
    
    private final RoomService roomService; 
    
    @GetMapping
    public ResponseEntity<List<PostResponse>> getAllPost() {
        try {
            List<PostResponse> posts = roomService.getAllPosts();
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            // Handle the exception
            log.error("Error occurred in getAllRoom method: " + e.getMessage());
            throw new RuntimeException("Error occurred in getAllRoom method", e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostWithId(@PathVariable("id") Long id) {
        try {
            PostResponse postResponse = roomService.getPostWithId(id);
            if (postResponse == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found with ID: " + id);
            }
            return ResponseEntity.status(HttpStatus.OK).body(postResponse);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Post not found with ID: " + id);
        }
    }
    
    @GetMapping("/findByPlace")
    public ResponseEntity<List<PostResponse>> findByPlace(@RequestParam("district") String district,
                                                          @RequestParam("ward") String ward) {
        try {
            log.info(district + " " + ward);
            List<PostResponse> posts = roomService.findByPlace(district, ward);
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            // Handle the exception
            log.error("Error occurred in findByPlace method: " + e.getMessage());
            throw new RuntimeException("Error occurred in findByPlace method", e);
        }
    }

    @PostMapping
    public ResponseEntity<String> createPost(@ModelAttribute PostDTO postDTO) throws IOException {
        try {
            log.info("Go here");
            return roomService.createPost(postDTO);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating post");
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoomWithId(@PathVariable Long id, @RequestParam(value = "user_id") Long userId) {
        return roomService.deletePostWithId(id, userId);
    }
}
