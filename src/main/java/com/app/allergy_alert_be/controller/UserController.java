package com.app.allergy_alert_be.controller;

import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.model.UserRegistrationRequest;
import com.app.allergy_alert_be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody UserRegistrationRequest request) {
        return userService.createUser(request.getUsername(), request.getEmail(), request.getPassword());
    }
}