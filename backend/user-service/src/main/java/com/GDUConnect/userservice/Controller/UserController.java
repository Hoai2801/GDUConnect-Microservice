package com.GDUConnect.userservice.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @GetMapping("/{id}")
    public ResponseEntity<?> getUsers(@PathVariable("id") Long id) {
        if (id == 1) {
            return ResponseEntity.ok().body("User id: 1");
        }
        return ResponseEntity.badRequest().body("Cannot find this user with id: " + id);
    }
}
