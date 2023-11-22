package com.GDUConnect.userservice.Service;

import com.GDUConnect.userservice.Model.UserModel;
import org.hibernate.exception.DataException;

import java.util.Optional;

public class UserService {
//    private final AuthenticationManager authenticationManager;
//
//    public String login(String studentId, String password) throws Exception {
//        Optional<UserModel> User = userRepository.findByStudentId(studentId);
//        if (User.isEmpty()) {
//            throw new Exception("Invalid student id / password ");
//        }
//
//        UserModel existingUser = User.get();
//
//        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(studentId, password, existingUser.getAuthorities());
//
//        authenticationManager.authenticate(authenticationToken);
//        return jwtTokenUtil.generateToken(existingUser);
//    }
}
