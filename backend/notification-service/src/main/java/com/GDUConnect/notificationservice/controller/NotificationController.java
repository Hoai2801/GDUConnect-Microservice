//package com.GDUConnect.notificationservice.controller;
//
//import com.GDUConnect.notificationservice.Model.NotificationModel;
//import com.GDUConnect.notificationservice.service.NotificationService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//@RestController("/api/v1/notification")
//@RequiredArgsConstructor
//public class NotificationController {
//    private final NotificationService notificationService; 
//    
//    @GetMapping("/{id}")
//    public List<NotificationModel> seenAllNotification(@PathVariable int id) {
//        return notificationService.seenAllNotification(id);
//    }
//}
