package com.GDUConnect.groupservice.Model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "group_table")
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GroupModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String fb;
    private String zalo;
    private String discord;
    @Column(name = "other_link")
    private String otherLink;
    private String avatar;
}
