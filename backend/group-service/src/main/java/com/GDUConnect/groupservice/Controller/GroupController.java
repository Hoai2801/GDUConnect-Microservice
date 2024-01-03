package com.GDUConnect.groupservice.Controller;

import com.GDUConnect.groupservice.DTO.GroupDTO;
import com.GDUConnect.groupservice.Service.GroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/group")
@RequiredArgsConstructor
public class GroupController {
    private final GroupService groupService;

    @GetMapping("")
    public ResponseEntity<?> getAllGroups() {
        return groupService.getAllGroups();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGroupDetailWithId(@PathVariable Long id) {
        return groupService.getGroupDetailWithId(id);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createGroup(@RequestBody GroupDTO groupDTO) {
        try {
            return groupService.createGroup(groupDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateGroup(@RequestBody GroupDTO groupDTO, @PathVariable Long id) {
        try {
            return groupService.updateGroup(groupDTO, id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteGroup(@PathVariable Long id) {
        try {
            return groupService.deleteGroup(id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
