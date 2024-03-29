package com.GDUConnect.postservice.Event;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostEvent {
    private String status;
    private String message;
    private int userId;
    private int fromGroup;
}
