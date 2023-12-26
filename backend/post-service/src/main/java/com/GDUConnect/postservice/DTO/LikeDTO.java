package com.GDUConnect.postservice.DTO;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LikeDTO {
    private int userId;
    private int postId;
}
