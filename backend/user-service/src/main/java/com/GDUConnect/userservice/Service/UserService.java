//package com.GDUConnect.userservice.Service;
//
//import com.GDUConnect.userservice.Model.UserModel;
//import com.GDUConnect.userservice.Repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//
//import java.util.Optional;
//
//@RequiredArgsConstructor
//public class UserService {
//    private final AuthenticationManager authenticationManager;
//    private final UserRepository userRepository;
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
//}
