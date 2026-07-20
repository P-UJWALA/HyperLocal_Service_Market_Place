package com.hyperlocal.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyperlocal.server.entity.Booking;
import com.hyperlocal.server.entity.User;
import com.hyperlocal.server.enums.BookingStatus;


public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByCustomer(User customer);

    List<Booking> findByProvider(User provider);

    List<Booking> findByBookingStatus(BookingStatus bookingStatus);

    List<Booking> findByCustomerAndBookingStatus(User customer,
                                                 BookingStatus bookingStatus);

    List<Booking> findByProviderAndBookingStatus(User provider,
                                                 BookingStatus bookingStatus);
}
