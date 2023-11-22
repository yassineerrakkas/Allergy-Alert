package com.app.allergy_alert_be.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table
@Data
public class Allergy {
    @Id
    @SequenceGenerator(
            name = "allergy_sequence",
            sequenceName = "allergy_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "allergy_sequence"
    )
    private Long id;

    private String name;

    @ManyToMany(mappedBy = "allergies")
    private List<User> users;
}
