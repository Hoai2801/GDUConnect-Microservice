package survey.com.example.survey_services.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import survey.com.example.survey_services.models.Score;

public interface ScoreRepository extends JpaRepository<Score, Long> {
    @Query(value = "SELECT * FROM Score s WHERE s.user_id = :userId", nativeQuery = true)
    Score findByUserId(@Param("userId") long userId);

}
