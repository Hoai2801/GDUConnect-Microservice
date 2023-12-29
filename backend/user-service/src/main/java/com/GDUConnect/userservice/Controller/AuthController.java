package com.GDUConnect.userservice.Controller;

import com.GDUConnect.userservice.DTO.LoginDTO;
import com.GDUConnect.userservice.DTO.RegisterDTO;
import com.GDUConnect.userservice.Response.AuthenticationResponse;
import com.GDUConnect.userservice.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
@CrossOrigin
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
