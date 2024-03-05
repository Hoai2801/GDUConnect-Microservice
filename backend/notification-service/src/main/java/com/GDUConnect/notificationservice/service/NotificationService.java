package com.GDUConnect.notificationservice.service;

import com.GDUConnect.notificationservice.Model.Model;
import com.GDUConnect.notificationservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NotificationService {
    private final NotificationRepository notificationRepository;

    public void sendNotification(Model model) {
        notificationRepository.save(model);
    }

    public List<Model> seenAllNotification(int userId) {
        List<Model> models = notificationRepository.listAllByUserId(userId);
        models.stream().map(model -> {
            model.setCheck(true);
            notificationRepository.save(model);
            return null;
        });
        return models;
    }
}
