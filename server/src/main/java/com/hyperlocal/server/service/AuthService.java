package com.hyperlocal.server.service;

import com.hyperlocal.server.dto.auth.LoginRequest;
import com.hyperlocal.server.dto.auth.LoginResponse;
import com.hyperlocal.server.dto.auth.RegisterRequest;
import com.hyperlocal.server.dto.common.ApiResponse;


public interface AuthService {
    ApiResponse<Void> register(RegisterRequest request);

    ApiResponse<LoginResponse> login(LoginRequest request);
}
