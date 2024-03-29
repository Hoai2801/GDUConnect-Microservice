package com.GDUConnect.notificationservice;

import com.GDUConnect.notificationservice.event.PostEvent;
//import com.GDUConnect.notificationservice.service.NotificationService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;

@SpringBootApplication
@Slf4j
@RequiredArgsConstructor
public class NotificationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificationServiceApplication.class, args);
	}

	@KafkaListener(topics = "notificationTopic")
	public void handleNotification(@NonNull PostEvent postEvent) {
		// send out an email notification
		log.info("Create status: {}", postEvent.getStatus());
		// Save the notification to the database
//		if (postEvent.getStatus().equals("Success")) {
//			notificationService.saveNotification(postEvent);
//		} 
	}
}