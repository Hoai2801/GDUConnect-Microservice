package com.GDUConnect.postservice.DTO;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO {
    private int userId;

    private String content;

    private MultipartFile image;
}
