package com.GDUConnect.userservice.Service;

import com.GDUConnect.userservice.DTO.LoginDTO;
import com.GDUConnect.userservice.DTO.RegisterDTO;
import com.GDUConnect.userservice.Model.Role;
import com.GDUConnect.userservice.Model.UserModel;
import com.GDUConnect.userservice.Repository.UserRepository;
import com.GDUConnect.userservice.Response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
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
                .classroom("")
                .department("")
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
