package com.GDUConnect.authservice.Repository;

import com.GDUConnect.authservice.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByStudentCode(String studentCode);
}
