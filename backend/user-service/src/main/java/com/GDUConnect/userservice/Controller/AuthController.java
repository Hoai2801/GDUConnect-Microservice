package com.GDUConnect.apigateway.Controller;

import com.GDUConnect.apigateway.DTO.LoginDTO;
import com.GDUConnect.apigateway.DTO.RegisterDTO;
import com.GDUConnect.apigateway.Response.AuthenticationResponse;
import com.GDUConnect.apigateway.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
//    public ResponseEntity<AuthenticationResponse> register(
    public ResponseEntity<?> register(
            @RequestBody RegisterDTO registerDTO
    ) {
        return ResponseEntity.ok().body("Register");
        return ResponseEntity.ok().body(authenticationService.register(registerDTO));
    }

    @PostMapping("/login")
//    public ResponseEntity<AuthenticationResponse> login(
    public ResponseEntity<?> login(
            @RequestBody LoginDTO loginDTO
    ) {
        return ResponseEntity.ok().body(authenticationService.login(loginDTO));
    }
}
