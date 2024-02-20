package survey.com.example.survey_services.models;

import java.time.LocalDate;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "joinsurvey")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JoinSurvey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "user_id")
    private Long userId;

    @Column(name = "survey_id")
    private Long surveyId;

    @Column(name = "joined_at")
    private LocalDate JoinedAt;
}
