package com.GDUConnect.postservice.DTO;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
    private int userId;
    private String content;
    private int groupId;
    private List<MultipartFile> file;
}
