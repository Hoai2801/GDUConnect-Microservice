package com.GDUConnect.userservice.DTO;

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
