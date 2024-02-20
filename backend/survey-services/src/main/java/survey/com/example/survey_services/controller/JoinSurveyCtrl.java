package survey.com.example.survey_services.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import survey.com.example.survey_services.DTO.JoinSurveyDTO;
import survey.com.example.survey_services.models.JoinSurvey;

import survey.com.example.survey_services.services.JoinSurveyServices;

@RequestMapping("/api/v1/survey/join-survey")
@RestController
@RequiredArgsConstructor
public class JoinSurveyCtrl {
    private final JoinSurveyServices joinSurveyServices;

    @PostMapping()
    public ResponseEntity<?> joinSurvey(@Valid @RequestBody JoinSurveyDTO joinSurveyDTO,
                                          BindingResult result
    ) {
        try {
            if (result.hasErrors()) {
                List<String> errMess = result.getFieldErrors()
                        .stream()
                        .map(fieldError -> fieldError.getDefaultMessage())
                        .toList();
                return ResponseEntity.badRequest().body(errMess);
            }
            JoinSurvey res = joinSurveyServices.createJoinSurveyAndAddPoint(joinSurveyDTO);
            if (res == null) {
                return ResponseEntity.badRequest().body("Người tạo không thể tự tham gia survey của mình");
            }
            return ResponseEntity.ok("Tham gia Survey thành công");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Tham gia survey bị lỗi " + e);
        }
    }

    @GetMapping()
    public ResponseEntity<?> getAllJoinSurvey() {
        try {
            List<JoinSurvey> joinSurveys = joinSurveyServices.getAllJoinSurvey();
            return ResponseEntity.ok(joinSurveys);
        } catch (Exception e) {
            e.printStackTrace(); // Log or handle the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error r" + e);
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getJoinSurveyWithUserId(@PathVariable Long userId) {
        try {
            List<JoinSurvey> joinSurveys = joinSurveyServices.getAllJoinSurveyWithUserId(userId);
            return ResponseEntity.ok(joinSurveys);
        } catch (Exception e) {
            e.printStackTrace(); // Log or handle the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error " + e);
        }
    }
}