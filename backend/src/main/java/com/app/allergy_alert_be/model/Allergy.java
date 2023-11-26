package com.app.allergy_alert_be.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Entity
@Table
@Data
public class Allergy {
    @Id
    private Long id;
    private String name;
}