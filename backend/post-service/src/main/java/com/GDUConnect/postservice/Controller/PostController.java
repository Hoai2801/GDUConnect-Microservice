package com.GDUConnect.postservice.Controller;

import com.GDUConnect.postservice.DTO.PostDTO;
import com.GDUConnect.postservice.Event.PostEvent;
import com.GDUConnect.postservice.Service.PostService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("api/v1/post")
@RequiredArgsConstructor
public class PostController {
    public final WebClient.Builder webClientBuilder;
    public final KafkaTemplate<String, PostEvent> kafkaTemplate;
    public final PostService postService;

    @PostMapping("")
    @CircuitBreaker(name = "user", fallbackMethod = "fallbackMethod")
    @TimeLimiter(name = "user")
    @Retry(name = "user")
    public CompletableFuture<ResponseEntity<String>> createPost(@ModelAttribute PostDTO postDTO
    ) {
        return CompletableFuture.supplyAsync(() -> {
            String user = webClientBuilder.build().get().uri("http://user-service/api/v1/user/" + postDTO.getUserId()).retrieve().bodyToMono(String.class).block();
            kafkaTemplate.send("notificationTopic", new PostEvent(postDTO.getUserId()));
            String url = null;
            try {
                url = postService.createPost(postDTO);
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
            return ResponseEntity.ok().body(url);
        });
    }

    public CompletableFuture<String> fallbackMethod(@ModelAttribute PostDTO postDTO, RuntimeException runtimeException) {
        return CompletableFuture.supplyAsync(() -> "Opps! User cannot be found, try again!");
    }
}
