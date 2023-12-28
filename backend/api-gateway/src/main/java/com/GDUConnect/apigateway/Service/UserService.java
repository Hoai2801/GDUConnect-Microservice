package com.GDUConnect.apigateway.Service;

import com.GDUConnect.apigateway.Model.UserModel;
import com.GDUConnect.apigateway.Repository.UserRepository;
import com.GDUConnect.apigateway.Response.UserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

@RequiredArgsConstructor
@Service
public class UserService {
//    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;

    public UserResponse findUserWithId(Long id) {
        UserModel userModel = userRepository.findById(id).orElseThrow(null);
        return UserResponse.builder()
                .id(userModel.getId())
                .department(userModel.getDepartment())
                .fullname(userModel.getFullname())
                .build();
    }
//    private
//
//    public String login(String studentId, String password) throws Exception {
//        Optional<UserModel> User = userRepository.findByStudentCode(studentId);
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
