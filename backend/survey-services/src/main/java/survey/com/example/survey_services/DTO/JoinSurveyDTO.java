package survey.com.example.survey_services.DTO;

import jakarta.persistence.Column;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JoinSurveyDTO {
    @Column(name = "user_id")
    private Long userID;
    @Column(name = "survey_id")
    private Long surveyId;
}
