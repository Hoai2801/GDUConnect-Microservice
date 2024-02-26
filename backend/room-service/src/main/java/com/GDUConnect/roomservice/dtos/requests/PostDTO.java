package com.GDUConnect.roomservice.dtos.requests;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Data
public class PostDTO {
    private int userId; 
    private String title;
    private String district;
    private String ward;
    private int area;
    private Long price;
    private String description;
    private String facebook;
    private String phoneNumber;
    private List<MultipartFile> image;
}
