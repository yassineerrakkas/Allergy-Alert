package com.app.allergy_alert_be.Request_Response;

import lombok.Data;

import java.util.List;

@Data
public class UserRegistrationRequest {
    private String fullName;
    private String email;
    private String password;
    private List<Long> selectedAllergies;
}
