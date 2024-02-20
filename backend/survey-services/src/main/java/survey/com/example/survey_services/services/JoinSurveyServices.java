package survey.com.example.survey_services.services;

import java.time.LocalDate;
import java.util.List;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import survey.com.example.survey_services.DTO.JoinSurveyDTO;
import survey.com.example.survey_services.models.JoinSurvey;
import survey.com.example.survey_services.models.Score;
import survey.com.example.survey_services.models.Survey;
import survey.com.example.survey_services.repositories.JoinSurveyRepository;
import survey.com.example.survey_services.repositories.ScoreRepository;
import survey.com.example.survey_services.repositories.SurveyRepository;

@RequiredArgsConstructor
@Service
public class JoinSurveyServices {
    private final JoinSurveyRepository joinSurveyRepository;
    private final ScoreRepository scoreRepository;
    private final SurveyRepository surveyRepository;

    /**
     * Create a new JoinSurvey and add a point to the user's score when joining a survey.
     *
     * @param joinSurveyDTO The DTO containing the survey ID and user ID.
     * @return The created JoinSurvey object, or null if the user is the survey creator.
     */
    public JoinSurvey createJoinSurveyAndAddPoint(JoinSurveyDTO joinSurveyDTO) {
        // Find the survey based on the survey ID
        Survey userCreateSurvey = surveyRepository.findById(joinSurveyDTO.getSurveyId()).orElse(null);

        // Check if the user creating the survey is the same as the user joining the survey
        if (userCreateSurvey.getUserId() == joinSurveyDTO.getUserID()) {
            return null;
        }

        // Create a new JoinSurvey object with the survey ID, user ID, and current date
        JoinSurvey newJoinSurvey = JoinSurvey.builder()
                .surveyId(joinSurveyDTO.getSurveyId())
                .userId(joinSurveyDTO.getUserID())
                .JoinedAt(LocalDate.now())
                .build();

        // Get the user's score based on the user ID
        Score userJoin = scoreRepository.findByUserId(newJoinSurvey.getUserId());

        // Add 1 point to the user's score when joining a survey
        userJoin.setPoint(userJoin.getPoint() + 1);

        // Save the updated user's score
        scoreRepository.save(userJoin);

        // Save the new JoinSurvey object
        return joinSurveyRepository.save(newJoinSurvey);
    }

    public List<JoinSurvey> getAllJoinSurvey() {
        try {
            return joinSurveyRepository.findAll();
        } catch (Exception e) {
            throw new EntityNotFoundException(e);
        }
    }

    public List<JoinSurvey> getAllJoinSurveyWithUserId(Long UserId) {
        try {
            return joinSurveyRepository.findByUserId(UserId);
        } catch (Exception e) {
            throw new EntityNotFoundException(e);

        }
    }

}
