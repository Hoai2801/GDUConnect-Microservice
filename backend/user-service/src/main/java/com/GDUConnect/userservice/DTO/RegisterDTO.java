package com.GDUConnect.apigateway.DTO;

import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDTO {
    private String fullname;
    private String classroom;
    private String studentCode;
    private String department;
    private String password;
}
