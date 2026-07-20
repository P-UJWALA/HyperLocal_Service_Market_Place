package com.hyperlocal.server.dto.booking;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import com.hyperlocal.server.enums.BookingStatus;

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
public class BookingResponse {

    private Long bookingId;

    private String customerName;

    private String providerName;

    private String categoryName;

    private String title;

    private String description;

    private String houseNumber;

    private String street;

    private String area;

    private String city;

    private String district;

    private String state;

    private String pincode;

    private LocalDate preferredDate;

    private LocalTime preferredTime;

    private BookingStatus bookingStatus;

    private BigDecimal estimatedCost;

    private BigDecimal finalCost;

    private LocalDateTime createdAt;
    public void setBookingStatus(BookingStatus bookingStatus) {
        this.bookingStatus = bookingStatus;
    }
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    public void setProviderName(String providerName) {
        this.providerName = providerName;
    }
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
    public void setEstimatedCost(BigDecimal estimatedCost) {
        this.estimatedCost = estimatedCost;
    }
    public void setFinalCost(BigDecimal finalCost) {
        this.finalCost = finalCost;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }
    public void setStreet(String street) {
        this.street = street;
    }
    public void setArea(String area) {
        this.area = area;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public void setDistrict(String district) {
        this.district = district;
    }
    public void setState(String state) {
        this.state = state;
    }
    public void setPincode(String pincode) {
        this.pincode = pincode;
    }
}