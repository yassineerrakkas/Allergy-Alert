package com.app.allergy_alert_be.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "contact_us")
@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String react;
    private String comment;
}
