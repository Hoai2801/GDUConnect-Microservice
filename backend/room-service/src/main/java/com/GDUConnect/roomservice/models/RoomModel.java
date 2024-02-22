package com.GDUConnect.roomservice.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "rooms")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RoomModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int userId;
    private String title;
    private String district;
    private String ward;
    private String street;
    private int area;
    private Long price;
    private String description;
    @Column(name = "created_at")
    private LocalDate createdAt;

}

