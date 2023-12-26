package com.GDUConnect.postservice.Repository;

import com.GDUConnect.postservice.DTO.LikeDTO;
import com.GDUConnect.postservice.Model.LikeModel;
import com.GDUConnect.postservice.Model.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<LikeModel, Long> {
    LikeModel findByUserIdAndPostId(int userId, PostModel postId);
}
