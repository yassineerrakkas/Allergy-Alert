package com.app.allergy_alert_be.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "users")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String email;

    private String fullName;
    private String password;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_allergies",
            joinColumns = @JoinColumn(name = "user_email"),
            inverseJoinColumns = @JoinColumn(name = "allergy_id")
    )
    @JsonIgnore // Add this annotation to break the infinite loop
    private Set<Allergy> allergies;
}
