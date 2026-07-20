package com.hyperlocal.server.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hyperlocal.server.entity.Booking;
import com.hyperlocal.server.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    Optional<Review> findByBooking(Booking booking);

}