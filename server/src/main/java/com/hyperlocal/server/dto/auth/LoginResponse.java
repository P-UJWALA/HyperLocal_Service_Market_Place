package com.hyperlocal.server.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class LoginResponse {
     private String token;

    private String role;

    private String fullName;
    
}
