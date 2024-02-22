package com.GDUConnect.roomservice.controllers;

import com.GDUConnect.roomservice.dtos.requests.RoomDTO;
import com.GDUConnect.roomservice.models.RoomModel;
import com.GDUConnect.roomservice.services.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/room")
@RequiredArgsConstructor
public class RoomController {
    
    private final RoomService roomService; 
    
    @GetMapping("/")
    public List<RoomModel> getAllRoom() {
        return roomService.getAllRoom(); 
    } 
        
    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public String createRoom(@RequestBody RoomDTO roomDTO) {
        return roomService.createRoom(roomDTO);
    }
}
