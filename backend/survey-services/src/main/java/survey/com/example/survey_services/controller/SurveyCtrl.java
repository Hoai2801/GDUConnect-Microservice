package survey.com.example.survey_services.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import survey.com.example.survey_services.DTO.SurveyDTO;
import survey.com.example.survey_services.models.Survey;
import survey.com.example.survey_services.repositories.SurveyRepository;
import survey.com.example.survey_services.services.SurveyServices;

@RequestMapping("/api/v1/survey")
@RestController
@RequiredArgsConstructor
public class SurveyCtrl {
    private final SurveyServices surveyServices;
    private final SurveyRepository surveyRepository;

    /**
     * Create a survey.
     *
     * @param surveyDTO the survey data transfer object
     * @param result the binding result
     * @return a response entity with the result of the survey creation
     */
    @PostMapping()
    public ResponseEntity<?> createSurvey(@Valid @RequestBody SurveyDTO surveyDTO,
                                          BindingResult result
    ) {
        try {
            // Check for validation errors
            if (result.hasErrors()) {
                // Get the error messages for each field error
                List<String> errorMessages = result.getFieldErrors()
                        .stream()
                        .map(fieldError -> fieldError.getDefaultMessage())
                        .toList();

                // Return a bad request response with the error messages
                return ResponseEntity.badRequest().body(errorMessages);
            }

            // Create the survey
            surveyServices.createSurvey(surveyDTO);

            // Return a success response
            return ResponseEntity.ok("Create survey success");
        } catch (Exception e) {
            // Return a bad request response with the error message
            return ResponseEntity.badRequest().body("Create survey fail " + e);
        }
    }

    // not use in real application
    @GetMapping("")
    public ResponseEntity<?> getAllSurvey() {
        try {
            return ResponseEntity.ok(surveyServices.getAllSurvey());

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSurveyWithId(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(surveyServices.getSurveyWithId(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    /**
     * Retrieves all surveys associated with a specific user.
     *
     * @param userId The ID of the user.
     * @return A ResponseEntity containing the list of surveys.
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getAllSurveyWithUserId(@PathVariable Long userId) {
        try {
            List<Survey> surveys = surveyServices.getAllWithUserId(userId);
            return ResponseEntity.ok(surveys);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    /**
     * Updates a survey with the given ID.
     *
     * @param id                The ID of the survey to update.
     * @param updateSurveyDTO   The updated survey data.
     * @return                  A ResponseEntity with the result of the update operation.
     */
    @PutMapping("/{id}")
    public ResponseEntity<?> updateSurveyWithId(@PathVariable Long id, @Valid @RequestBody SurveyDTO updateSurveyDTO) {
        try {
            // Check if the survey exists
            Boolean isSurvey = surveyRepository.existsById(id);
            if (!isSurvey) {
                return ResponseEntity.badRequest().body("Survey id does not exist");
            }

            // Update the survey
            Survey isUpdate = surveyServices.updateSurveyWithId(id, updateSurveyDTO);
            if (isUpdate == null) {
                return ResponseEntity.badRequest().body("Failed to update survey");
            }
            return ResponseEntity.ok("Successfully updated survey with id: " + id);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to update survey");
        }
    }
}
