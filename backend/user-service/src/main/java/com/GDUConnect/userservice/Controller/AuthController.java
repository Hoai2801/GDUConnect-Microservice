//package com.GDUConnect.userservice.Controller;
//
//import com.GDUConnect.userservice.DTO.LoginDTO;
//import com.GDUConnect.userservice.DTO.RegisterDTO;
//import com.GDUConnect.userservice.Response.AuthenticationResponse;
//import com.GDUConnect.userservice.Service.AuthenticationService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/v1/user")
//@RequiredArgsConstructor
//public class AuthController {
//
//    private final AuthenticationService authenticationService;
//
//    @PostMapping("/register")
//    public ResponseEntity<AuthenticationResponse> register(
////    public ResponseEntity<?> register(
//            @RequestBody RegisterDTO registerDTO
//    ) {
//        return ResponseEntity.ok().body(authenticationService.register(registerDTO));
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<AuthenticationResponse> login(
////    public ResponseEntity<?> login(
//            @RequestBody LoginDTO loginDTO
//    ) {
//        return ResponseEntity.ok().body(authenticationService.login(loginDTO));
//    }
//}
