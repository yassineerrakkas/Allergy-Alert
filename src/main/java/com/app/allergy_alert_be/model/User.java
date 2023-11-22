package com.app.allergy_alert_be.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data

public class User {
    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private Long id;
    private String email;
    private String full_name;
    private String password;
}
