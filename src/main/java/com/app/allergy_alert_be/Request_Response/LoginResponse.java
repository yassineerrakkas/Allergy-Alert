package com.app.allergy_alert_be.Request_Response;

import lombok.Data;

@Data
public class LoginResponse {
    String message;
    Boolean status;

    public LoginResponse(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }
}
