//package com.GDUConnect.notificationservice.service;
//
//import com.GDUConnect.notificationservice.Model.NotificationModel;
//import com.GDUConnect.notificationservice.event.PostEvent;
//import com.GDUConnect.notificationservice.repository.NotificationRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//public class NotificationService {
//    
//    private final NotificationRepository notificationRepository;
//
//    public List<NotificationModel> seenAllNotification(int userId) {
//        List<NotificationModel> models = notificationRepository.listAllByUserId(userId);
//        models.stream().map(model -> {
//            model.setCheck(true);
//            notificationRepository.save(model);
//            return null;
//        });
//        return models;
//    }
//
//    public void saveNotification(PostEvent postEvent) {
//        notificationRepository.save(NotificationModel.builder()
//                .title(postEvent.getMessage())
//                .isCheck(false)
//                .userId(postEvent.getUserId())
//                .fromGroup(postEvent.getFromGroup())
//                .build());
//    }
//}
