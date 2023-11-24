// UserController.java
package com.app.allergy_alert_be.controller;

import com.app.allergy_alert_be.DTO.LoginDTO;
import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.model.UserRegistrationRequest;
import com.app.allergy_alert_be.response.LoginResponse;
import com.app.allergy_alert_be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }



    @PostMapping("/{userEmail}/allergies")
    public ResponseEntity<?> addUserAllergies(@PathVariable String userEmail, @RequestBody UserRegistrationRequest request) {
        return new ResponseEntity<>(userService.addUserAllergies(userEmail, request.getSelectedAllergies()), HttpStatus.OK);
    }
}
