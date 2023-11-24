package com.GDUConnect.apigateway.Repository;

import com.GDUConnect.apigateway.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByStudentCode(String studentCode);
}
