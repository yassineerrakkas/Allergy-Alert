package com.app.allergy_alert_be.repository;

import com.app.allergy_alert_be.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Integer> {
    List<Ingredient> findAllByAllergyIdIn(List<Integer> allergyIds);
}
