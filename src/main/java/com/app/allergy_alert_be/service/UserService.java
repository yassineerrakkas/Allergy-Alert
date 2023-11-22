package com.app.allergy_alert_be.service;
import com.app.allergy_alert_be.model.Allergy;
import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User createUser(String username, String email, String password) {
        System.out.println("Creating user: " + username);

        User user = new User();
        user.setFull_name(username);
        user.setEmail(email);

        user.setPassword(password);

        return userRepository.save(user);
    }
}