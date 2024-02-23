package com.GDUConnect.roomservice.dtos.requests;

import lombok.Data;

@Data
public class RoomDTO {
    private int userId; 
    private String title;
    private String district;
    private String ward;
    private String street;
    private int area;
    private Long price;
    private String description;
}
