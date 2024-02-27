package com.GDUConnect.roomservice.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "rooms")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int userId;
    private String title;
    private String district;
    private String ward;
    private int area;
    private Long price;
    private String description;
    private String facebook;
    @Column(name = "phone_number")
    private String phoneNumber;
    
    @Column(name = "created_at")
    private LocalDate createdAt;
    
    @OneToMany(mappedBy = "postId")
    @JsonManagedReference
    private List<ImageModel> images;
}

