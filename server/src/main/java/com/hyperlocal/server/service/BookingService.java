package com.hyperlocal.server.service;

import java.util.List;

import com.hyperlocal.server.dto.booking.BookingRequest;
import com.hyperlocal.server.dto.booking.BookingResponse;

public interface BookingService {

    BookingResponse createBooking(Long customerId,
                                  BookingRequest request);

    BookingResponse getBooking(Long bookingId);

    List<BookingResponse> getCustomerBookings(Long customerId);

    List<BookingResponse> getProviderBookings(Long providerId);

    BookingResponse assignProvider(Long bookingId,
                                   Long providerId);

    BookingResponse updateStatus(Long bookingId,
                                 String status);

}