package com.app.allergy_alert_be.service;

import com.app.allergy_alert_be.model.Allergy;
import com.app.allergy_alert_be.repository.AllergyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AllergyService {

    @Autowired
    private AllergyRepository allergyRepository;

    public List<Allergy> getAllergies() {
        return allergyRepository.findAll();
    }
}
