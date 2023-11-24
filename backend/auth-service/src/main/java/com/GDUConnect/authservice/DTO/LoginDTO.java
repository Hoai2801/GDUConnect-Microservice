package com.GDUConnect.authservice.DTO;

import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LoginDTO {
    private String studentCode;
    private String password;
}
