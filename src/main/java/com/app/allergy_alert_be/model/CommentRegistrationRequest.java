package com.app.allergy_alert_be.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data

public class CommentRegistrationRequest {
    private String email;
    private String react;
    private String comment;
}

