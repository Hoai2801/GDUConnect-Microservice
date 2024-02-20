package survey.com.example.survey_services.models;

import java.time.LocalDateTime;
import lombok.*;
import jakarta.persistence.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public class BaseEntity {
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "ended_at")
    private LocalDateTime endedAt;
    // @Column(name = "updated_at")
    // private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        endedAt = createdAt.plusDays(7);

    }

}
