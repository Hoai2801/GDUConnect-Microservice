package com.GDUConnect.userservice.Controller;

import com.GDUConnect.userservice.DTO.UserLoginDTO;
import com.GDUConnect.userservice.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final UserService userService;
    @GetMapping("/{id}")
    public ResponseEntity<?> getUsers(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok().body(userService.findUserWithId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

//    @CrossOrigin()
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@RequestBody UserLoginDTO userLoginDTO) {
//        try {
////            String token = userService.login(userLoginDTO.getStudentId(), userLoginDTO.getPassword());
////            return ResponseEntity.ok().body(token);
//            return ResponseEntity.ok().body("Login successfully!");
//        } catch (Exception e) {
//            return ResponseEntity.badRequest().body(e.getMessage());
//        }
//    }
}
