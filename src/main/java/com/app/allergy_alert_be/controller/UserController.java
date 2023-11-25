// UserController.java
package com.app.allergy_alert_be.controller;

import com.app.allergy_alert_be.model.Login;
import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.Request_Response.UserRegistrationRequest;
import com.app.allergy_alert_be.Request_Response.LoginResponse;
import com.app.allergy_alert_be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.app.allergy_alert_be.Request_Response.FoodIngredientsRequest;

import java.text.Normalizer;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

   @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationRequest request) {
        // Check if the email already exists
        if (userService.doesEmailExist(request.getEmail())) {
            return new ResponseEntity<>("Email already exists", HttpStatus.CONFLICT);
        }

        // Register the user
        User registeredUser = userService.createUser(request);
        return new ResponseEntity<>(registeredUser, HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody Login login) {
        LoginResponse response = userService.loginUser(login);
        return ResponseEntity.ok(response);
    }



    @PostMapping("/{userEmail}/allergies")
    public ResponseEntity<?> addUserAllergies(@PathVariable String userEmail, @RequestBody UserRegistrationRequest request) {
        return new ResponseEntity<>(userService.addUserAllergies(userEmail, request.getSelectedAllergies()), HttpStatus.OK);
    }
    @PostMapping("/{userEmail}/checkAllergies")
    public ResponseEntity<Boolean> getUserIngredients(@PathVariable String userEmail, @RequestBody FoodIngredientsRequest request) {
        try {
            List<String> foodIngredients = request.getWords();
            List<Long> allergyIds = userService.getAllergyIdsByEmail(userEmail);
            List<String> ingredients = userService.getIngredientsByAllergyIds(allergyIds);

            for (String ingredient : foodIngredients) {
                if (containsIgnoreCaseAndSpaces(ingredients, ingredient)) {
                    return ResponseEntity.ok(true);
                }
            }

            return ResponseEntity.ok(false);
        } catch (Exception e) {
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    private boolean containsIgnoreCaseAndSpaces(List<String> list, String target) {
        // Normalize the strings by removing accents and periods
        target = normalizeString(target);

        for (String element : list) {
            // Normalize the list element before comparison
            String normalizedElement = normalizeString(element);

            if (normalizedElement.replaceAll("\\s", "").equalsIgnoreCase(target.replaceAll("\\s", ""))) {
                return true;
            }
        }
        return false;
    }

    private String normalizeString(String input) {
        return Normalizer.normalize(input, Normalizer.Form.NFD)
                .replaceAll("\\p{InCombiningDiacriticalMarks}+", "")
                .replace(".", "")  // Remove periods
                .toLowerCase();
    }
}
