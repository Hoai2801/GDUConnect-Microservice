package com.GDUConnect.postservice.Controller;

import com.GDUConnect.postservice.DTO.CommentDTO;
import com.GDUConnect.postservice.DTO.LikeDTO;
import com.GDUConnect.postservice.DTO.PostDTO;
import com.GDUConnect.postservice.Event.PostEvent;
import com.GDUConnect.postservice.Model.PostModel;
import com.GDUConnect.postservice.Service.LikeService;
import com.GDUConnect.postservice.Service.PostService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("api/v1/post")
@RequiredArgsConstructor
@Slf4j
public class PostController {
    public final KafkaTemplate<String, PostEvent> kafkaTemplate;
    public final PostService postService;
    public final LikeService likeService;

    @PostMapping("")
    @CircuitBreaker(name = "user", fallbackMethod = "fallbackMethodCreate")
    @TimeLimiter(name = "user")
    @Retry(name = "user")
    public CompletableFuture<ResponseEntity<String>> createPost(@ModelAttribute PostDTO postDTO) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                return postService.createPost(postDTO);
            } catch (IOException e) {
                kafkaTemplate.send("notificationTopic", new PostEvent("Fail"));
                throw new RuntimeException(e);
            }
        });
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id) {
        try {
            postService.deletePostWithId(id);
            return ResponseEntity.ok().body("Delete successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("")
    public ResponseEntity<?> getAllPost() {
        try {
            return ResponseEntity.ok().body(postService.getAllPosts());
        } catch (Exception e) {
            log.error("Failed to get all posts due to an IOException: {}", e);
            return ResponseEntity.badRequest().body("Failed to get all posts: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPostWithId(@PathVariable("id") Long id) {
        try {
            PostModel post = postService.getPostWithId(id);
            return ResponseEntity.ok().body(post);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/comment/{id}")
    public ResponseEntity<?> createComment(@PathVariable Long id,
                                           @ModelAttribute CommentDTO commentDTO
    ) {
        try {
            log.info("Create comment: {}", commentDTO.getImage());
            log.info("Create comment: {}", commentDTO.getContent());
            log.info("Create comment: {}", commentDTO.getUserId());
            PostModel post = postService.getPostWithId(id);
            if (post.toString() != null) {
                log.info("here");
                return postService.createComment(commentDTO, id);
            }
            return ResponseEntity.badRequest().body("Cannot find the post!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/comment/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable Long id) {
        try {
            postService.deleteCommentWithId(id);
            return ResponseEntity.badRequest().body("Delete the comment successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // fallback method
    public CompletableFuture<String> fallbackMethodCreate(@ModelAttribute PostDTO postDTO, RuntimeException runtimeException) {
        return CompletableFuture.supplyAsync(() -> "Opps! cannot create post, try again!");
    }

    @PostMapping("/like")
    public ResponseEntity<?> likePostWithId(@RequestBody LikeDTO likeDTO) {
        try {
            return likeService.likePostWithId(likeDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/unlike")
    public ResponseEntity<?> unlikePostWithId(@RequestBody LikeDTO likeDTO) {
        try {
            return likeService.unlikePostWithId(likeDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
