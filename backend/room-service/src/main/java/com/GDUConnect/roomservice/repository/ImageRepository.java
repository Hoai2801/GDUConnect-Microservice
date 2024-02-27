package com.GDUConnect.roomservice.repository;

import com.GDUConnect.roomservice.models.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
}
