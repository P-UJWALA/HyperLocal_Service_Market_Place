package com.hyperlocal.server.dto.booking;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class BookingRequest {

    @NotNull
    private Long categoryId;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String houseNumber;

    @NotBlank
    private String street;

    @NotBlank
    private String area;

    @NotBlank
    private String city;

    @NotBlank
    private String district;

    @NotBlank
    private String state;

    @NotBlank
    private String pincode;

    @FutureOrPresent
    private LocalDate preferredDate;

    private LocalTime preferredTime;

}