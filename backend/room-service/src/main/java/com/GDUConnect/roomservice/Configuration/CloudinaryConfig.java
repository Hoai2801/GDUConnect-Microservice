package com.GDUConnect.roomservice.Configuration;

import com.cloudinary.Cloudinary;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;
@Configuration
public class CloudinaryConfig {
    private final String CLOUD_NAME = "dqqkpgega";
    private final String API_KEY = "782433662387241";
    private final String API_SECRET = "6IozHHG1T075aajCQnGZ00RVY7Q";

    @Bean
    public Cloudinary cloudinary() {
        Map<String, String> config = new HashMap<>();
        config.put("cloud_name",CLOUD_NAME);
        config.put("api_key",API_KEY);
        config.put("api_secret",API_SECRET);
        return new Cloudinary(config);
    }
}
