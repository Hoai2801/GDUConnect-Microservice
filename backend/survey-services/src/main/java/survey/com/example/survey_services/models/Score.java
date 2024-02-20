package survey.com.example.survey_services.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "score")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    private Integer point;
}
