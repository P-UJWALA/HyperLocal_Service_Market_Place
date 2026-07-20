package com.hyperlocal.server.service.impl;


import java.util.List;

import org.springframework.stereotype.Service;

import com.hyperlocal.server.category.entity.ServiceCategory;
import com.hyperlocal.server.category.repository.CategoryRepository;
import com.hyperlocal.server.dto.booking.BookingRequest;
import com.hyperlocal.server.dto.booking.BookingResponse;
import com.hyperlocal.server.entity.Booking;
import com.hyperlocal.server.entity.User;
import com.hyperlocal.server.enums.BookingStatus;
import com.hyperlocal.server.enums.Role;
import com.hyperlocal.server.exception.BadRequestException;
import com.hyperlocal.server.exception.ResourceNotFoundException;
import com.hyperlocal.server.repository.BookingRepository;
import com.hyperlocal.server.repository.UserRepository;
import com.hyperlocal.server.service.BookingService;

import lombok.RequiredArgsConstructor;




@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRepository bookingRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;
 
    @Override
   public BookingResponse createBooking(Long customerId, BookingRequest request) {

    User customer = userRepository.findById(customerId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Customer not found"));

    if (customer.getRole() != Role.CUSTOMER) {
        throw new BadRequestException("Only customers can create bookings");
    }

    ServiceCategory category = categoryRepository.findById(request.getCategoryId())
            .orElseThrow(() ->
                    new ResourceNotFoundException("Category not found"));

    Booking booking = Booking.builder()
            .title(request.getTitle())
            .description(request.getDescription())
            .houseNumber(request.getHouseNumber())
            .street(request.getStreet())
            .area(request.getArea())
            .city(request.getCity())
            .district(request.getDistrict())
            .state(request.getState())
            .pincode(request.getPincode())
            .preferredDate(request.getPreferredDate())
            .preferredTime(request.getPreferredTime())
            .bookingStatus(BookingStatus.PENDING)
            .customer(customer)
            .category(category)
            .build();

    Booking savedBooking = bookingRepository.save(booking);

   return mapToResponse(savedBooking);

}

private BookingResponse mapToResponse(Booking booking) {

    return BookingResponse.builder()
            .bookingId(booking.getBookingId())
            .customerName(booking.getCustomer().getFullName())
            .providerName(
                    booking.getProvider() != null
                            ? booking.getProvider().getFullName()
                            : null)
            .categoryName(booking.getCategory().getCategoryName())
            .title(booking.getTitle())
            .description(booking.getDescription())
            .houseNumber(booking.getHouseNumber())
            .street(booking.getStreet())
            .area(booking.getArea())
            .city(booking.getCity())
            .district(booking.getDistrict())
            .state(booking.getState())
            .pincode(booking.getPincode())
            .preferredDate(booking.getPreferredDate())
            .preferredTime(booking.getPreferredTime())
            .bookingStatus(booking.getBookingStatus())
            .estimatedCost(booking.getEstimatedCost())
            .finalCost(booking.getFinalCost())
            .createdAt(booking.getCreatedAt())
            .build();
}
@Override
public BookingResponse getBooking(Long bookingId) {

    Booking booking = bookingRepository.findById(bookingId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Booking not found with id : " + bookingId));

    return mapToResponse(booking);
}
@Override
public List<BookingResponse> getCustomerBookings(Long customerId) {

    User customer = userRepository.findById(customerId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Customer not found"));

    List<Booking> bookings = bookingRepository.findByCustomer(customer);

    return bookings.stream()
            .map(this::mapToResponse)
            .toList();
}
@Override
public List<BookingResponse> getProviderBookings(Long providerId) {

    User provider = userRepository.findById(providerId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Provider not found"));

    List<Booking> bookings = bookingRepository.findByProvider(provider);

    return bookings.stream()
            .map(this::mapToResponse)
            .toList();
}
@Override
public BookingResponse assignProvider(Long bookingId, Long providerId) {

    Booking booking = bookingRepository.findById(bookingId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Booking not found"));

    User provider = userRepository.findById(providerId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Provider not found"));

    if (provider.getRole() != Role.PROVIDER) {
        throw new BadRequestException("Selected user is not a provider");
    }

    booking.setProvider(provider);
    booking.setBookingStatus(BookingStatus.ASSIGNED);

    Booking updatedBooking = bookingRepository.save(booking);

    return mapToResponse(updatedBooking);
}
@Override
public BookingResponse updateStatus(Long bookingId, String status) {

    Booking booking = bookingRepository.findById(bookingId)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Booking not found"));

    booking.setBookingStatus(BookingStatus.valueOf(status.toUpperCase()));

    Booking updatedBooking = bookingRepository.save(booking);

    return mapToResponse(updatedBooking);
}
}
