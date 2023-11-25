package com.app.allergy_alert_be.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
@Entity
@Table
@Data
public class Ingredient {
    @Id
    private int id;
    private String name;
    private int allergyId;
}
