package com.hyperlocal.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyperlocal.server.dto.provider.ProviderProfileRequest;
import com.hyperlocal.server.dto.provider.ProviderProfileResponse;
import com.hyperlocal.server.service.ProviderProfileService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/provider-profile")
@RequiredArgsConstructor
public class ProviderProfileController {

    private final ProviderProfileService providerProfileService;

    @PostMapping
    public ResponseEntity<ProviderProfileResponse> createProfile(
            @Valid @RequestBody ProviderProfileRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(providerProfileService.createProfile(request));
    }

    @GetMapping("/{profileId}")
    public ResponseEntity<ProviderProfileResponse> getProfile(
            @PathVariable Long profileId) {

        return ResponseEntity.ok(
                providerProfileService.getProfile(profileId));
    }

    @PutMapping("/{profileId}")
    public ResponseEntity<ProviderProfileResponse> updateProfile(
            @PathVariable Long profileId,
            @Valid @RequestBody ProviderProfileRequest request) {

        return ResponseEntity.ok(
                providerProfileService.updateProfile(profileId, request));
    }

}