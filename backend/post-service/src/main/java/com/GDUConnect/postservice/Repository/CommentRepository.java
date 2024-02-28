package com.GDUConnect.postservice.Repository;

import com.GDUConnect.postservice.Model.CommentModel;
import com.GDUConnect.postservice.Model.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<CommentModel, Long> {
    List<CommentModel> findCommentModelByPostId(PostModel postId);

    List<CommentModel> findByPostIdOrderByUpdatedAtDesc(PostModel postId);
}
