package survey.com.example.survey_services.services;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import survey.com.example.survey_services.DTO.SurveyDTO;
import survey.com.example.survey_services.models.Score;
import survey.com.example.survey_services.models.Survey;
import survey.com.example.survey_services.repositories.ScoreRepository;
import survey.com.example.survey_services.repositories.SurveyRepository;

@RequiredArgsConstructor
@Service
public class SurveyServices {
    private final SurveyRepository surveyRepository;
    private final ScoreRepository scoreRepository;

    public Survey createSurvey(SurveyDTO surveyDTO) {
        Survey newSurvey = Survey.builder().title(surveyDTO.getTitle())
                .urlGGForm(surveyDTO.getUrlGGForm())
                .userId(surveyDTO.getUserId())
                .build();
        Score userCreate = scoreRepository.findByUserId(newSurvey.getUserId());
        userCreate.setPoint(userCreate.getPoint() + 1);

        return surveyRepository.save(newSurvey);
    }

    public Survey getSurveyWithId(Long id) {
        try {
            return surveyRepository.findById(id).orElse(null);
        } catch (Exception e) {
            throw new EntityNotFoundException(e);
        }
    }

    public List<Survey> getAllSurvey() {
        try {
            return surveyRepository.findAll();
        } catch (Exception e) {
            throw new EntityNotFoundException(e);
        }
    }

    // Get all survey witch user id not join
    public List<Survey> getAllWithUserId(Long userId) {
        try {
            return surveyRepository.findByUserId(userId);
        } catch (Exception e) {
            throw new EntityNotFoundException(e);

        }
    }

    public Survey updateSurveyWithId(Long id, SurveyDTO updateSurvey) {
        Survey exsitingSurvey = surveyRepository.findById(id).orElse(null);
        if (exsitingSurvey != null) {
            exsitingSurvey
                    .setTitle(updateSurvey.getTitle() != null ? updateSurvey.getTitle() : exsitingSurvey.getTitle());
            exsitingSurvey.setUrlGGForm(
                    updateSurvey.getUrlGGForm() != null ? updateSurvey.getUrlGGForm() : exsitingSurvey.getUrlGGForm());
            exsitingSurvey.setUserId(
                    updateSurvey.getUserId() != null ? updateSurvey.getUserId() : exsitingSurvey.getUserId());
            return surveyRepository.save(exsitingSurvey);
        }
        return null;
    }

}
