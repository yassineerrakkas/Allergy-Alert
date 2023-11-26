package com.app.allergy_alert_be.repository;

import com.app.allergy_alert_be.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
