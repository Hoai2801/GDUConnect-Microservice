package com.GDUConnect.postservice.Model;

import com.GDUConnect.postservice.DTO.UserDTO;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "post")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostModel extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id")
    private int user;

    @JsonManagedReference("contentt")
    private String content;

    @Column(name = "group_id")
    private int groupId;

    @OneToMany(mappedBy = "postId")
    @JsonManagedReference
    private List<ImageModel> images;

    @OneToMany(mappedBy = "postId")
    @JsonManagedReference
    private List<CommentModel> comments;

    @OneToMany(mappedBy = "postId")
    @JsonManagedReference
    private List<LikeModel> likes;
}
