package com.GDUConnect.postservice.Repository;

import com.GDUConnect.postservice.Model.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<PostModel, Long> {
    @Query("SELECT p FROM PostModel p ORDER BY p.id DESC")
    List<PostModel> getAllOrderByIdDesc();

    List<PostModel> getByGroupId(Long groupId);
}