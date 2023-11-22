package com.app.allergy_alert_be.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class Allergy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
}
