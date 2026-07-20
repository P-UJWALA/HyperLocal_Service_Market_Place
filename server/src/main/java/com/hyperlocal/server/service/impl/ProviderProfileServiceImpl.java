package com.hyperlocal.server.service.impl;

import org.springframework.stereotype.Service;

import com.hyperlocal.server.category.entity.ServiceCategory;
import com.hyperlocal.server.category.repository.CategoryRepository;
import com.hyperlocal.server.dto.provider.ProviderProfileRequest;
import com.hyperlocal.server.dto.provider.ProviderProfileResponse;
import com.hyperlocal.server.entity.ProviderProfile;
import com.hyperlocal.server.entity.User;
import com.hyperlocal.server.enums.Role;
import com.hyperlocal.server.exception.BadRequestException;
import com.hyperlocal.server.exception.ResourceNotFoundException;
import com.hyperlocal.server.repository.ProviderProfileRepository;
import com.hyperlocal.server.repository.UserRepository;
import com.hyperlocal.server.service.ProviderProfileService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProviderProfileServiceImpl implements ProviderProfileService {

    private final ProviderProfileRepository providerProfileRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;

    @Override
    public ProviderProfileResponse createProfile(ProviderProfileRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));

        if (user.getRole() != Role.PROVIDER) {
            throw new BadRequestException("User is not a provider");
        }

        ServiceCategory category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Category not found"));

        ProviderProfile profile = ProviderProfile.builder()
                .user(user)
                .category(category)
                .experience(request.getExperience())
                .aadhaarNumber(request.getAadhaarNumber())
                .bio(request.getBio())
                .available(request.getAvailable())
                .build();

        ProviderProfile savedProfile =
                providerProfileRepository.save(profile);

        return mapToResponse(savedProfile);
    }

    @Override
    public ProviderProfileResponse getProfile(Long profileId) {

        ProviderProfile profile =
                providerProfileRepository.findById(profileId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Profile not found"));

        return mapToResponse(profile);
    }

    @Override
    public ProviderProfileResponse updateProfile(Long profileId,
                                                 ProviderProfileRequest request) {

        ProviderProfile profile =
                providerProfileRepository.findById(profileId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Profile not found"));

        profile.setExperience(request.getExperience());
        profile.setAadhaarNumber(request.getAadhaarNumber());
        profile.setBio(request.getBio());
        profile.setAvailable(request.getAvailable());

        ProviderProfile updated =
                providerProfileRepository.save(profile);

        return mapToResponse(updated);
    }

    private ProviderProfileResponse mapToResponse(ProviderProfile profile) {

        return ProviderProfileResponse.builder()
                .profileId(profile.getProfileId())
                .providerName(profile.getUser().getFullName())
                .categoryName(profile.getCategory().getCategoryName())
                .experience(profile.getExperience())
                .aadhaarNumber(profile.getAadhaarNumber())
                .bio(profile.getBio())
                .available(profile.getAvailable())
                .rating(profile.getRating())
                .verified(profile.getVerified())
                .build();
    }

}