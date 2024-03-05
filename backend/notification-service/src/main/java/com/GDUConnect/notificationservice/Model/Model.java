package com.GDUConnect.notificationservice.Model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jdk.jfr.Enabled;
import lombok.Builder;
import lombok.Data;

@Enabled
@Table(name = "notification_service")
@Data
@Builder
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private boolean isCheck;
    private int userId; 
    private int fromGroup;
}
