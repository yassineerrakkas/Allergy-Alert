package com.app.allergy_alert_be.service;

import com.app.allergy_alert_be.model.Comment;
import com.app.allergy_alert_be.Request_Response.CommentRegistrationRequest;
import com.app.allergy_alert_be.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
