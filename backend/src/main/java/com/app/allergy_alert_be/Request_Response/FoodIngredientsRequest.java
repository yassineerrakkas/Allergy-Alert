package com.app.allergy_alert_be.Request_Response;

import lombok.Data;

import java.util.List;
@Data
public class FoodIngredientsRequest {
    private List<String> words;

}
