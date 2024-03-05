package com.GDUConnect.notificationservice.repository;

import com.GDUConnect.notificationservice.Model.Model;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepository extends JpaRepository<Model, Long> {
    List<Model> listAllByUserId(int userId);
}
