// UserService.java
package com.app.allergy_alert_be.service;

import com.app.allergy_alert_be.model.Login;
import com.app.allergy_alert_be.model.Allergy;
import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.Request_Response.UserRegistrationRequest;
import com.app.allergy_alert_be.repository.AllergyRepository;
import com.app.allergy_alert_be.repository.UserRepository;
import com.app.allergy_alert_be.Request_Response.LoginResponse;
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
    @Autowired
    private IngredientService ingredientService;

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

    public LoginResponse loginUser(Login login) {
        Optional<User> userOptional = userRepository.findByEmail(login.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            String password = login.getPassword();
            String encodedPassword = user.getPassword();

            if (passwordEncoder.matches(password, encodedPassword)) {
                return new LoginResponse("Login Success", true);
            } else {
                return new LoginResponse("Password does not match", false);
            }
        } else {
            return new LoginResponse("Email does not exist", false);
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
    public List<Long> getAllergyIdsByEmail(String userEmail) throws UserNotFoundException {
        Optional<User> userOptional = userRepository.findByEmail(userEmail);

        if (userOptional.isPresent()) {
            Set<Allergy> allergies = userOptional.get().getAllergies();
            return allergies.stream()
                    .map(allergy -> allergy.getId()) // Ensure that this matches the actual method in your Allergy class
                    .collect(Collectors.toList());

        } else {
            throw new UserNotFoundException("User not found with email: " + userEmail);
        }
    }
    public List<String> getIngredientsByAllergyIds(List<Long> allergyIds) {
        List<Integer> allergyIdsAsIntegers = allergyIds.stream().map(Long::intValue).collect(Collectors.toList());
        return ingredientService.getIngredientsByAllergyIds(allergyIdsAsIntegers);
    }
    public boolean doesEmailExist(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}
