package com.GDUConnect.userservice.Repository;

import com.GDUConnect.userservice.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {
}
