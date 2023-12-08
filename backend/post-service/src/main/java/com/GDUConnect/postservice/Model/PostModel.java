package com.GDUConnect.postservice.Model;

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
    private Long id;

    @Column(name = "user_id")
    private int userId;

    private String content;

    @Column(name = "group_id")
    private int groupId;

    @OneToMany(mappedBy = "postId")
    @JsonManagedReference
    private List<ImageModel> images;

    @OneToMany(mappedBy = "postId")
    @JsonManagedReference
    private List<CommentModel> comments;
}
