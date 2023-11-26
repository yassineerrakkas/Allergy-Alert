package com.app.allergy_alert_be.service;

import com.app.allergy_alert_be.model.Ingredient;
import com.app.allergy_alert_be.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    public List<String> getIngredientsByAllergyIds(List<Integer> allergyIds) {
        List<Ingredient> ingredients = ingredientRepository.findAllByAllergyIdIn(allergyIds);
        return ingredients.stream().map(Ingredient::getName).collect(Collectors.toList());
    }
}
