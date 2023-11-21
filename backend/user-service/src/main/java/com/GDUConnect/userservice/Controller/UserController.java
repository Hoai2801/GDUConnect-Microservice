package com.GDUConnect.userservice.Controller;

import com.GDUConnect.userservice.DTO.UserLoginDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @GetMapping("/{id}")
    public ResponseEntity<?> getUsers(@PathVariable("id") Long id) {
        if (id == 1) {
            return ResponseEntity.ok().body(1);
        }
        return ResponseEntity.badRequest().body("Cannot find this user with id: " + id);
    }

    @CrossOrigin()
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginDTO userLoginDTO) {
        try {
//            String token = userService.login(userLoginDTO.getStudentId(), userLoginDTO.getPassword());
//            return ResponseEntity.ok().body(token);
            return ResponseEntity.ok().body("Login successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
