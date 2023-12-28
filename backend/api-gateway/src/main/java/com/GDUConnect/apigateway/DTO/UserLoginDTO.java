package com.GDUConnect.apigateway.DTO;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginDTO {
    private String studentId;

    private String password;
}
