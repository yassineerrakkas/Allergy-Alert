package com.app.allergy_alert_be.service;

import com.app.allergy_alert_be.model.Comment;
import com.app.allergy_alert_be.model.CommentRegistrationRequest;
import com.app.allergy_alert_be.model.User;
import com.app.allergy_alert_be.model.UserRegistrationRequest;
import com.app.allergy_alert_be.repository.AllergyRepository;
import com.app.allergy_alert_be.repository.CommentRepository;
import com.app.allergy_alert_be.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service

public class CommentService {
    @Autowired
    private CommentRepository commentRepository;


    public Comment createComment(CommentRegistrationRequest request) {

        Comment comment = new Comment();

        comment.setEmail(request.getEmail());
        comment.setReact(request.getReact());
        comment.setComment(request.getComment());

        return commentRepository.save(comment);}
}
