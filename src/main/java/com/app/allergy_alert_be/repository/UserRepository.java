package com.app.allergy_alert_be.repository;

import com.app.allergy_alert_be.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByEmail(String email);

    Optional<User> findOneByEmailAndPassword(String email, String password);

}
