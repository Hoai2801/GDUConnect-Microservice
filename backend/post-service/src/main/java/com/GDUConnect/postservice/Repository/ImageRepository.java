package com.GDUConnect.postservice.Repository;

import com.GDUConnect.postservice.Model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {
}
