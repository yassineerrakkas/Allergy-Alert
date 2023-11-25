package com.app.allergy_alert_be.controller;

import com.app.allergy_alert_be.model.Comment;
import com.app.allergy_alert_be.Request_Response.CommentRegistrationRequest;
import com.app.allergy_alert_be.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comments")
@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {
    @Autowired
    private CommentService commentService;
    @PostMapping("/register")
    public ResponseEntity<?> registerComment(@RequestBody CommentRegistrationRequest request) {

        // Register the comment
        Comment registeredComment = commentService.createComment(request);
        return new ResponseEntity<>(registeredComment, HttpStatus.OK);
    }
}
