package com.GDUConnect.roomservice.repository;

import com.GDUConnect.roomservice.models.RoomModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends JpaRepository<RoomModel, Long> {
}
