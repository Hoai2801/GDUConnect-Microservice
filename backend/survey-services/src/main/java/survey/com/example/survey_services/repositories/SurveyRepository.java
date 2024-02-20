package survey.com.example.survey_services.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import survey.com.example.survey_services.models.Survey;

public interface SurveyRepository extends JpaRepository<Survey, Long> {
    // Get all survey not is expried user not joined
    @Query(value = "SELECT * FROM Survey s WHERE s.id not in ( SELECT survey_id FROM JoinSurvey j where j.user_id = :userId) and s.user_id != :userId and curdate() between s.created_at and s. ended_at", nativeQuery = true)
    List<Survey> findByUserId(@Param("userId") Long userId);

    // Get all survey user not joined when is expried
    @Query(value = "SELECT * FROM Survey s WHERE s.id not in ( SELECT survey_id FROM JoinSurvey j where j.user_id = :userId) and s.user_id != :userId and curdate() > ended_at", nativeQuery = true)
    List<Survey> findSurVeyIsExpriedWithUSerId(@Param("userId") Long userId);
}
