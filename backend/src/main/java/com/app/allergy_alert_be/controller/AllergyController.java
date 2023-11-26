package com.app.allergy_alert_be.controller;

import com.app.allergy_alert_be.model.Allergy;
import com.app.allergy_alert_be.service.AllergyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/allergies")
@CrossOrigin(origins = "http://localhost:3000")
public class AllergyController {

    @Autowired
    private AllergyService allergyService;

    @GetMapping
    public List<Allergy> getAllergies() {
        return allergyService.getAllergies();
    }
}
