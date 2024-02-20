package survey.com.example.survey_services.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

import survey.com.example.survey_services.repositories.ScoreRepository;
import survey.com.example.survey_services.services.ScoreServices;

@RequestMapping("/api/v1/survey/score")
@RestController
@RequiredArgsConstructor
public class ScoreCtrl {
    private final ScoreRepository scoreRepository;
    private final ScoreServices scoreServices;

    /**
     * Get the score by user ID.
     *
     * @param userId The ID of the user.
     * @return The score of the user.
     */
    @GetMapping("/{userId}")
    public ResponseEntity<?> getScoreByUserId(@PathVariable Long userId) {
        try {
            Integer score = scoreRepository.findByUserId(userId).getPoint();
            if (score != null) {
                return ResponseEntity.ok(score);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Score not found for userId: " + userId);
            }
        } catch (Exception e) {
            e.printStackTrace(); // Log or handle the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving score" + e);
        }
    }

    // hoai -> 1
    // subpoint/1 -> hoai
    @GetMapping("/subpoint/{userId}")
    public ResponseEntity<?> subPointByUserId(@PathVariable Long userId) {
        try {
            Boolean res = scoreServices.subPointWithUserId(userId);
            if (res == true) {
                return ResponseEntity.ok("Bạn mới vừa bị trừ điểm vì không tham gia khảo sát");
            }
            return ResponseEntity.ok("Bạn đã tham gia khảo sát đầy đủ nên không bị trừ điểm");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Hiện tại tính năng này đang lỗi vui lòng thử lại sau!");
        }
    }
}
