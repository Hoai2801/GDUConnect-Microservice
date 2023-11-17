package com.GDUConnect.postservice.Repository;

import com.GDUConnect.postservice.Model.PostModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<PostModel, Long> {
}
