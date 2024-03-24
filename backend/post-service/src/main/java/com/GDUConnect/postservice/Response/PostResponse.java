package com.GDUConnect.postservice.Response;

import com.GDUConnect.postservice.DTO.UserDTO;
import com.GDUConnect.postservice.Model.CommentModel;
import com.GDUConnect.postservice.Model.ImageModel;
import com.GDUConnect.postservice.Model.LikeModel;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private Long id;
    private UserDTO user;
    private String content;

    private List<ImageModel> images;

    private List<CommentResponse> comments;

    private List<LikeModel> likes;

    private LocalDateTime createdAt;
}
