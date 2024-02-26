package com.GDUConnect.roomservice.dtos.requests;

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
