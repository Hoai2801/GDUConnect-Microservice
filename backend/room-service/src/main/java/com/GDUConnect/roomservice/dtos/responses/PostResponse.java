package com.GDUConnect.roomservice.dtos.responses;

import com.GDUConnect.roomservice.dtos.requests.UserDTO;
import com.GDUConnect.roomservice.models.ImageModel;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
@Builder
public class PostResponse {
    private Long id;
    private UserDTO userId;
    private String title;
    private String district;
    private String ward;
    private int area;
    private Long price;
    private String description;
    private String facebook;
    private String phoneNumber;
    @JsonProperty(value = "created_at")
    private LocalDate createdAt;
    private List<ImageModel> image;
}
