package com.hyperlocal.server.service.impl;

import org.springframework.stereotype.Service;

import com.hyperlocal.server.dto.review.ReviewRequest;
import com.hyperlocal.server.dto.review.ReviewResponse;
import com.hyperlocal.server.entity.Booking;
import com.hyperlocal.server.entity.Review;
import com.hyperlocal.server.enums.BookingStatus;
import com.hyperlocal.server.exception.BadRequestException;
import com.hyperlocal.server.exception.ResourceNotFoundException;
import com.hyperlocal.server.repository.BookingRepository;
import com.hyperlocal.server.repository.ReviewRepository;
import com.hyperlocal.server.service.ReviewService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final BookingRepository bookingRepository;

     @Override
    public ReviewResponse createReview(ReviewRequest request) {

        Booking booking = bookingRepository.findById(request.getBookingId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Booking not found"));

        if (booking.getBookingStatus() != BookingStatus.COMPLETED) {
            throw new BadRequestException("Booking is not completed");
        }

        if (reviewRepository.findByBooking(booking).isPresent()) {
            throw new BadRequestException("Review already submitted");
        }

        Review review = Review.builder()
                .booking(booking)
                .customer(booking.getCustomer())
                .provider(booking.getProvider())
                .rating(request.getRating())
                .review(request.getReview())
                .build();

        Review savedReview = reviewRepository.save(review);

        return mapToResponse(savedReview);
    }

    @Override
    public ReviewResponse getReview(Long reviewId) {

        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Review not found"));

        return mapToResponse(review);
    }

    private ReviewResponse mapToResponse(Review review) {

        return ReviewResponse.builder()
                .reviewId(review.getReviewId())
                .bookingId(review.getBooking().getBookingId())
                .customerName(review.getCustomer().getFullName())
                .providerName(review.getProvider().getFullName())
                .rating(review.getRating())
                .review(review.getReview())
                .build();
    }
}