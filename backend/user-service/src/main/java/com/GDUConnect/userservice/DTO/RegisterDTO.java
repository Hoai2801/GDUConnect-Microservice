package com.GDUConnect.userservice.DTO;

import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RegisterDTO {
    private String fullname;
//    private String classroom;
    private String mail;
    private String studentCode;
//    private String department;
    private String password;
}
