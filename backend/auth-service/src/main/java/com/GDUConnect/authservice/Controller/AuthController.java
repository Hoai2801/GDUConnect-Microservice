package com.GDUConnect.authservice.Controller;

import com.GDUConnect.authservice.DTO.LoginDTO;
import com.GDUConnect.authservice.DTO.RegisterDTO;
import com.GDUConnect.authservice.Response.AuthenticationResponse;
import com.GDUConnect.authservice.Service.AuthenticationService;
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
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterDTO registerDTO
    ) {
        return ResponseEntity.ok().body(authenticationService.register(registerDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody LoginDTO loginDTO
    ) {
        return ResponseEntity.ok().body(authenticationService.login(loginDTO));
    }
}
