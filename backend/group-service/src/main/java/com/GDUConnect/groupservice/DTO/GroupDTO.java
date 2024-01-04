package com.GDUConnect.groupservice.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class GroupDTO {
    private String name;
    private String fb;
    private String zalo;
    private String discord;
    @JsonProperty("other-link")
    private String otherLink;
    private String avatar;
}
