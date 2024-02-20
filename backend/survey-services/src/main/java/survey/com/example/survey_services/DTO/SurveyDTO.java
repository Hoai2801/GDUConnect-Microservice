package survey.com.example.survey_services.DTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SurveyDTO {
    @NotBlank(message = "Please input title")
    private String title;
    @NotBlank(message = "url gg form not empty")
    @Column(name = "gg_form")
    private String urlGGForm;
    @Column(name = "user_id")
    private Long userId;

}
