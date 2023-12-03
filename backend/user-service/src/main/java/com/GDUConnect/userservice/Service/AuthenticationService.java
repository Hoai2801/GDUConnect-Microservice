package com.GDUConnect.apigateway.Service;

import com.GDUConnect.apigateway.DTO.LoginDTO;
import com.GDUConnect.apigateway.DTO.RegisterDTO;
import com.GDUConnect.apigateway.Model.Role;
import com.GDUConnect.apigateway.Model.UserModel;
import com.GDUConnect.apigateway.Repository.UserRepository;
import com.GDUConnect.apigateway.Response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterDTO registerDTO) {
        UserModel user = UserModel.builder()
                .classroom(registerDTO.getClassroom())
                .department(registerDTO.getDepartment())
                .studentCode(registerDTO.getStudentCode())
                .fullname(registerDTO.getFullname())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse login(LoginDTO loginDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getStudentCode(),
                        loginDTO.getPassword()
                )
        );
        var user = userRepository.findByStudentCode(loginDTO.getStudentCode()).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
