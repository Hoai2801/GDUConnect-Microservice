package com.GDUConnect.postservice.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private int id;
    private String fullname;
    private String avatar;
    private String department;
}
