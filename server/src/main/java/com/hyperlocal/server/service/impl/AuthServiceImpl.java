package com.hyperlocal.server.service.impl;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hyperlocal.server.constants.AppConstants;
import com.hyperlocal.server.dto.auth.LoginRequest;
import com.hyperlocal.server.dto.auth.LoginResponse;
import com.hyperlocal.server.dto.auth.RegisterRequest;
import com.hyperlocal.server.dto.common.ApiResponse;
import com.hyperlocal.server.entity.User;
import com.hyperlocal.server.enums.AccountStatus;
import com.hyperlocal.server.enums.Role;
import com.hyperlocal.server.exception.DuplicateResourceException;
import com.hyperlocal.server.repository.UserRepository;
import com.hyperlocal.server.security.JwtService;
import com.hyperlocal.server.service.AuthService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public ApiResponse<Void> register(RegisterRequest request) {

       if(userRepository.existsByEmail(request.getEmail())){
    throw new DuplicateResourceException(AppConstants.EMAIL_ALREADY_EXISTS);
}

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            throw new DuplicateResourceException(AppConstants.PHONE_ALREADY_EXISTS);
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.CUSTOMER)
                .accountStatus(AccountStatus.ACTIVE)
                .build();

        userRepository.save(user);

        return ApiResponse.<Void>builder()
        .success(true)
        .message(AppConstants.REGISTER_SUCCESS)
        .data(null)
        .build();
    }
     @Override
public ApiResponse<LoginResponse> login(LoginRequest request) {

    

    //   if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
    //     throw new RuntimeException("Invalid Password");
    // }
   try {

    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );

} catch (BadCredentialsException e) {

    throw new RuntimeException("Invalid email or password");
}
User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() -> new RuntimeException("Invalid Id or Password"));
    LoginResponse response = LoginResponse.builder()
            .token(jwtService.generateToken(user))
            .role(user.getRole().name())
            .fullName(user.getFullName())
            .build();

    return ApiResponse.<LoginResponse>builder()
            .success(true)
            .message(AppConstants.LOGIN_SUCCESS)
            .data(response)
            .build();
}
}
