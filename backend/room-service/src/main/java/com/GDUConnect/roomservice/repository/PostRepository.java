package com.GDUConnect.roomservice.repository;

import com.GDUConnect.roomservice.dtos.responses.PostResponse;
import com.GDUConnect.roomservice.models.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<PostModel, Long> {
    PostModel findPostModelById(Long id);

    List<PostModel> findByDistrict(String district);
}
