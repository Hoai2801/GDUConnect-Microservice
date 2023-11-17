package com.GDUConnect.postservice.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Post")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private int userId;

    private String content;

    @Column(name = "image_url")
    private String imageURL;
}
