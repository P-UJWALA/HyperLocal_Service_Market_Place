package com.hyperlocal.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyperlocal.server.entity.Booking;
import com.hyperlocal.server.entity.Payment;

public interface PaymentRepository
        extends JpaRepository<Payment, Long> {

    Optional<Payment> findByBooking(Booking booking);

}