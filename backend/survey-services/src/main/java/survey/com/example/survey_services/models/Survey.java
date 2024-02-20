package survey.com.example.survey_services.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "survey")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Survey extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String title;

    @Column(name = "gg_form")
    private String urlGGForm;
    @Column(name = "user_id")
    private Long userId;

}
