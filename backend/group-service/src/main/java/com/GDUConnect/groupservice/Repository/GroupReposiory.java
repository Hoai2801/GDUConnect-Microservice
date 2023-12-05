package com.GDUConnect.groupservice.Repository;

import com.GDUConnect.groupservice.Model.GroupModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GroupReposiory extends JpaRepository<GroupModel, Long> {
    @Query("SELECT g FROM GroupModel g WHERE g.id >= :id ORDER BY g.id DESC")
    List<GroupModel> findAllByIdGreaterThanID(Long id);
}
