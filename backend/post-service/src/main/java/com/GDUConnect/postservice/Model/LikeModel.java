package com.GDUConnect.postservice.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "post_like")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LikeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int userId;

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonBackReference
    private PostModel postId;
}
