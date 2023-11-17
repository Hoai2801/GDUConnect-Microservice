package com.GDUConnect.postservice.DTO;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
    private int userId;
    private String content;
    private MultipartFile file;
}
