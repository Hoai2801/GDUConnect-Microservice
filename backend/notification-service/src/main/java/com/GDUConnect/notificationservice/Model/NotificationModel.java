package com.GDUConnect.notificationservice.Model;

import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Enabled
@Table(name = "notification")
@Data
@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class NotificationModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private boolean isCheck;
    private int userId; 
    private int fromGroup;
}
