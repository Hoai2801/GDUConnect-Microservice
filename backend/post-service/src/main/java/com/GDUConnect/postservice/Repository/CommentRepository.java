package com.GDUConnect.postservice.Repository;

import com.GDUConnect.postservice.Model.CommentModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<CommentModel, Long> {
}
