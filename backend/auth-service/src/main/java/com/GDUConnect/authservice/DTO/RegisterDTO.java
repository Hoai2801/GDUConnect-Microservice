package com.GDUConnect.authservice.DTO;

import com.GDUConnect.authservice.Model.Role;
import jakarta.persistence.*;
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
