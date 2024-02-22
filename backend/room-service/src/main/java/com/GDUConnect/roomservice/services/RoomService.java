package com.GDUConnect.roomservice.services;

import com.GDUConnect.roomservice.dtos.requests.RoomDTO;
import com.GDUConnect.roomservice.models.RoomModel;
import com.GDUConnect.roomservice.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomService {
    private final RoomRepository roomRepository;
    
    public String createRoom(RoomDTO roomDTO) {
        RoomModel room = RoomModel.builder()
                .title(roomDTO.getTitle())
                .price(roomDTO.getPrice())
                .area(roomDTO.getArea())
                .ward(roomDTO.getWard())
                .district(roomDTO.getDistrict())
                .street(roomDTO.getStreet())
                .description(roomDTO.getDescription())
                .userId(roomDTO.getUserId())
                .createdAt(LocalDate.now())
                .build();
        roomRepository.save(room);
        return "Room created successfully";
    }

    public List<RoomModel> getAllRoom() {
        return roomRepository.findAll(); 
    }
}
