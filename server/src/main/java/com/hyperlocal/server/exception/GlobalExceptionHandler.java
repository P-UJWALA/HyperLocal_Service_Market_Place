package com.hyperlocal.server.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hyperlocal.server.constants.AppConstants;
import com.hyperlocal.server.dto.common.ApiErrorResponse;

import jakarta.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(DuplicateResourceException.class)
    public ResponseEntity<ApiErrorResponse> handleDuplicateResourceException(DuplicateResourceException ex,
        BadCredentialsException ex2, HttpServletRequest request) {
        ApiErrorResponse error = ApiErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.CONFLICT.value())
                .error(HttpStatus.CONFLICT.getReasonPhrase())
                .path(request.getRequestURI())
                .build();

        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }
    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiErrorResponse> handleBadCredentialsException(BadCredentialsException ex, HttpServletRequest request) {
        ApiErrorResponse error = ApiErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.UNAUTHORIZED.value())
                .error(HttpStatus.UNAUTHORIZED.getReasonPhrase())
                .message(AppConstants.INVALID_CREDENTIALS)
                .path(request.getRequestURI())
                .build();

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
    }
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> handleResourceNotFoundException(ResourceNotFoundException ex, HttpServletRequest request) {
        ApiErrorResponse error = ApiErrorResponse.builder()
                .timestamp(LocalDateTime.now())
                .status(HttpStatus.NOT_FOUND.value())
                .error(HttpStatus.NOT_FOUND.getReasonPhrase())
                .message(ex.getMessage())
                .path(request.getRequestURI())
                .build();

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
    
}
