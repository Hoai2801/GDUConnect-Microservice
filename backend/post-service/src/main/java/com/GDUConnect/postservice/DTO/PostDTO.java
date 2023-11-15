package com.GDUConnect.postservice.DTO;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
    private int userId;
    private String content;
    private MultipartFile file;
}
