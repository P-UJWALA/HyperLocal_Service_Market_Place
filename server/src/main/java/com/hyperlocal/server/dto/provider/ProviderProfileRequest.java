package com.hyperlocal.server.dto.provider;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProviderProfileRequest {

    private Long userId;

    private Long categoryId;

    private Integer experience;

    private String aadhaarNumber;

    private String bio;

    private Boolean available;
}