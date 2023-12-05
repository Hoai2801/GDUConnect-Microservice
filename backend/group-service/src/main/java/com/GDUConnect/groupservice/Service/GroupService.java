package com.GDUConnect.groupservice.Service;

import com.GDUConnect.groupservice.DTO.GroupDTO;
import com.GDUConnect.groupservice.Model.GroupModel;
import com.GDUConnect.groupservice.Repository.GroupReposiory;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class GroupService {
    private final GroupReposiory groupReposiory;

    public ResponseEntity<?> getAllGroups() {
        return ResponseEntity.ok().body(groupReposiory.findAllByIdGreaterThanID(2L));
    }

    public ResponseEntity<?> getGroupDetailWithId(Long id) {
        return ResponseEntity.ok().body(groupReposiory.findById(id));
    }

    public ResponseEntity<?> createGroup(GroupDTO groupDTO) {
        GroupModel model = GroupModel.builder()
                .name(groupDTO.getName())
                .fb(groupDTO.getFb())
                .zalo(groupDTO.getZalo())
                .discord(groupDTO.getDiscord())
                .otherLink(groupDTO.getOtherLink())
                .avatar(groupDTO.getAvatar())
                .build();
        groupReposiory.save(model);
        return ResponseEntity.ok("create new group successfully!");
    }

    public ResponseEntity<?> updateGroup(GroupDTO groupDTO, Long id) {
        GroupModel existingGroup = groupReposiory.findById(id).orElseThrow(null);
        if (existingGroup != null) {
            GroupModel update = GroupModel.builder()
                    .id(existingGroup.getId())
                    .name(groupDTO.getName())
                    .fb(groupDTO.getFb())
                    .zalo(groupDTO.getZalo())
                    .discord(groupDTO.getDiscord())
                    .otherLink(groupDTO.getOtherLink())
                    .avatar(groupDTO.getAvatar())
                    .build();
            groupReposiory.save(update);
        }
        return ResponseEntity.ok().body("update successfully");
    }

    public ResponseEntity<?> deleteGroup(Long id) {
        GroupModel existingGroup = groupReposiory.findById(id).orElseThrow(null);
        if (existingGroup != null) {
            groupReposiory.delete(existingGroup);
        }
        return ResponseEntity.ok().body("delete successfully");
    }
}
