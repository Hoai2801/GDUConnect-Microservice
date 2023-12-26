package com.GDUConnect.postservice.Response;


import com.GDUConnect.postservice.DTO.UserDTO;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentResponse {
    private Long id;
    private UserDTO user;
    private String content;
    private String imageURL;
    private LocalDateTime createdAt;
}
