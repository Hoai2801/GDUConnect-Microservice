package com.GDUConnect.postservice.Response;

import com.GDUConnect.postservice.Model.ImageModel;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.OneToMany;
import lombok.*;

import java.util.List;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private Long id;
    private int userId;
    private String content;

    @OneToMany(mappedBy = "Post")
    @JsonManagedReference
    private List<ImageModel> images;
}
