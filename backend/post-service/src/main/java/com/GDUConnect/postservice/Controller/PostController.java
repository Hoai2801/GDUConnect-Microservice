package com.GDUConnect.postservice.Controller;

import com.GDUConnect.postservice.DTO.PostDTO;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import io.github.resilience4j.timelimiter.annotation.TimeLimiter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("api/v1/post")
@RequiredArgsConstructor
public class PostController {
    public final WebClient.Builder webClientBuilder;

    @PostMapping("")
    @CircuitBreaker(name = "user", fallbackMethod = "fallbackMethod")
    @TimeLimiter(name = "user")
    @Retry(name = "user")
    public CompletableFuture<ResponseEntity<String>> getPosts(@RequestBody PostDTO postDTO) {
        return CompletableFuture.supplyAsync(() -> {
            String user = webClientBuilder.build().get().uri("http://user-service/api/v1/user").retrieve().bodyToMono(String.class).block();
            return ResponseEntity.ok().body(postDTO.getTitle() + " " + user);
        });
    }

    public CompletableFuture<String> fallbackMethod(@RequestBody PostDTO postDTO, RuntimeException runtimeException) {
        return CompletableFuture.supplyAsync(() -> "Opps! User cannot be found, try again!");
    }
}
