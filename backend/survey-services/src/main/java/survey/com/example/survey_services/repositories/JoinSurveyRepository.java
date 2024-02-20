package survey.com.example.survey_services.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import survey.com.example.survey_services.models.JoinSurvey;

public interface JoinSurveyRepository extends JpaRepository<JoinSurvey, Long> {
    @Query(value = "SELECT * FROM Joinsurvey WHERE user_id = :userId", nativeQuery = true)
    List<JoinSurvey> findByUserId(@Param("userId") Long userId);
}
