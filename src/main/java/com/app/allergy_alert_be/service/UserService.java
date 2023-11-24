// UserService.java
package com.app.allergy_alert_be.service;

import com.app.allergy_alert_be.DTO.LoginDTO;
import com.app.allergy_alert_be.model.Allergy;
import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.model.UserRegistrationRequest;
import com.app.allergy_alert_be.repository.AllergyRepository;
import com.app.allergy_alert_be.repository.UserRepository;
import com.app.allergy_alert_be.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    @Autowired
    public UserService(BCryptPasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }
    @Autowired
    private AllergyRepository allergyRepository;


    public User createUser(UserRegistrationRequest request) {
        // Check if the email already exists
        if (doesEmailExist(request.getEmail())) {
            throw new DuplicateKeyException("Email already exists");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userRepository.save(user);}

    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        Optional<User> user1 = userRepository.findByEmail(loginDTO.getEmail());
        if (user1.isPresent())  {
            User user2 = user1.get();
            String password = loginDTO.getPassword();
            String encodedPassword = user2.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepository.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (((Optional<?>) user).isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Email not exits", false);
        }
    }

    public User addUserAllergies(String userEmail, List<Long> selectedAllergies) {
        Optional<User> userOptional = userRepository.findByEmail(userEmail);

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Set the selected allergies
            if (selectedAllergies != null && !selectedAllergies.isEmpty()) {
                Set<Allergy> allergies = selectedAllergies.stream()
                        .map(allergyId -> {
                            Optional<Allergy> allergyOptional = allergyRepository.findById(allergyId);
                            return allergyOptional.orElse(null);
                        })
                        .filter(allergy -> allergy != null)
                        .collect(Collectors.toSet());

                user.setAllergies(allergies);

                // Save the user with updated allergies
                return userRepository.save(user);
            }
        }

        // Handle the case where the user is not found
        return null;
    }

    public boolean doesEmailExist(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}
