package survey.com.example.survey_services.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import survey.com.example.survey_services.models.Score;
import survey.com.example.survey_services.models.Survey;
import survey.com.example.survey_services.repositories.ScoreRepository;
import survey.com.example.survey_services.repositories.SurveyRepository;

@RequiredArgsConstructor
@Service
public class ScoreServices {
    private final SurveyRepository surveyRepository;
    private final ScoreRepository scoreRepository;

    public Boolean subPointWithUserId(Long userId) {
        try {
            Score userScore = scoreRepository.findByUserId(userId);
            // Check if the user has not joined any survey yet
            List<Survey> userNotJoinSurvey = surveyRepository.findSurVeyIsExpriedWithUSerId(userId);

            Integer minusPoint = userNotJoinSurvey.size();
            if (minusPoint > 0) {
                userScore.setPoint(userScore.getPoint() - minusPoint);
                System.out.println(minusPoint);
                scoreRepository.save(userScore);
                return true;
            }

            return false;
        } catch (Exception e) {
            throw new EntityNotFoundException(e);
        }
    }
}
