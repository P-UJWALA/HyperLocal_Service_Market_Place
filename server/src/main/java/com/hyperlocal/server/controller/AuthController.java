package com.hyperlocal.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyperlocal.server.dto.auth.LoginRequest;
import com.hyperlocal.server.dto.auth.LoginResponse;
import com.hyperlocal.server.dto.auth.RegisterRequest;
import com.hyperlocal.server.dto.common.ApiResponse;
import com.hyperlocal.server.service.AuthService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    @PostMapping("/register")
public ResponseEntity<ApiResponse<Void>> register(

        @Valid @RequestBody RegisterRequest request

) {
    return ResponseEntity.status(HttpStatus.CREATED)
            .body(authService.register(request));

}

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<LoginResponse>> login(@Valid @RequestBody LoginRequest request) {
       
        return ResponseEntity.ok(authService.login(request));
    }
}
