package com.hyperlocal.server.service;
import com.hyperlocal.server.dto.provider.ProviderProfileRequest;
import com.hyperlocal.server.dto.provider.ProviderProfileResponse;

public interface ProviderProfileService {

    ProviderProfileResponse createProfile(
            ProviderProfileRequest request);

    ProviderProfileResponse getProfile(Long profileId);

    ProviderProfileResponse updateProfile(
            Long profileId,
            ProviderProfileRequest request);

}