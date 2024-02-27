package com.GDUConnect.roomservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "post_image")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ImageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonBackReference
    private PostModel postId;

    @Column(name = "image_url")
    private String imageURL;
}
