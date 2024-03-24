package com.GDUConnect.notificationservice.repository;

import com.GDUConnect.notificationservice.Model.NotificationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<NotificationModel, Long> {
    @Query("select n from NotificationModel n where n.userId = ?1 and n.isCheck = false")
    List<NotificationModel> listAllByUserId(int userId);
}
