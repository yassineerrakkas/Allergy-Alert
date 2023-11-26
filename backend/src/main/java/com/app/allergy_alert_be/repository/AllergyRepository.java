package com.app.allergy_alert_be.repository;

import com.app.allergy_alert_be.model.Allergy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllergyRepository extends JpaRepository<Allergy, Long> {
    // You can add custom query methods here if needed
}
