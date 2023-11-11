package com.GDUConnect.postservice.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
@RequestMapping("api/v1/post")
@RequiredArgsConstructor
public class PostController {
    public final WebClient.Builder webClientBuilder;
    @GetMapping("")
    public ResponseEntity<String> getPosts() {
        String userId = webClientBuilder.build().get()
                .uri("http://user-service/api/v1/user")
                .retrieve()
                .bodyToMono(String.class)
                .block();
        return ResponseEntity.ok().body("Get Post Successfully of " + userId);
    }
}
