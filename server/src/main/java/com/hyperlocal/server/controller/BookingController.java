package com.hyperlocal.server.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hyperlocal.server.dto.booking.BookingRequest;
import com.hyperlocal.server.dto.booking.BookingResponse;
import com.hyperlocal.server.service.BookingService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;
    @PostMapping("/customer/{customerId}")
public ResponseEntity<BookingResponse> createBooking(
        @PathVariable Long customerId,
        @Valid @RequestBody BookingRequest request) {

    BookingResponse response = bookingService.createBooking(customerId, request);

    return ResponseEntity.status(HttpStatus.CREATED).body(response);
}
@GetMapping("/{bookingId}")
public ResponseEntity<BookingResponse> getBooking(
        @PathVariable Long bookingId) {

    return ResponseEntity.ok(
            bookingService.getBooking(bookingId));
}
@GetMapping("/customer/{customerId}")
public ResponseEntity<List<BookingResponse>> getCustomerBookings(
        @PathVariable Long customerId) {

    return ResponseEntity.ok(
            bookingService.getCustomerBookings(customerId));
}
@GetMapping("/provider/{providerId}")
public ResponseEntity<List<BookingResponse>> getProviderBookings(
        @PathVariable Long providerId) {

    return ResponseEntity.ok(
            bookingService.getProviderBookings(providerId));
}
@PutMapping("/{bookingId}/assign/{providerId}")
public ResponseEntity<BookingResponse> assignProvider(
        @PathVariable Long bookingId,
        @PathVariable Long providerId) {

    return ResponseEntity.ok(
            bookingService.assignProvider(
                    bookingId,
                    providerId));
}
@PutMapping("/{bookingId}/status")
public ResponseEntity<BookingResponse> updateBookingStatus(
        @PathVariable Long bookingId,
        @RequestParam String status) {

    return ResponseEntity.ok(
            bookingService.updateStatus(
                    bookingId,
                    status));
}
}
