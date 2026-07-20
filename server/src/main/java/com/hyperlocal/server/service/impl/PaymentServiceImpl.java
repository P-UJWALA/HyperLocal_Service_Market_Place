package com.hyperlocal.server.service.impl;

import org.springframework.stereotype.Service;

import com.hyperlocal.server.dto.payment.PaymentRequest;
import com.hyperlocal.server.dto.payment.PaymentResponse;
import com.hyperlocal.server.entity.Booking;
import com.hyperlocal.server.entity.Payment;
import com.hyperlocal.server.enums.BookingStatus;
import com.hyperlocal.server.enums.PaymentStatus;
import com.hyperlocal.server.exception.BadRequestException;
import com.hyperlocal.server.exception.ResourceNotFoundException;
import com.hyperlocal.server.repository.BookingRepository;
import com.hyperlocal.server.repository.PaymentRepository;
import com.hyperlocal.server.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final BookingRepository bookingRepository;

    @Override
    public PaymentResponse createPayment(PaymentRequest request) {

        Booking booking = bookingRepository.findById(request.getBookingId())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Booking not found"));

        if (booking.getBookingStatus() != BookingStatus.COMPLETED) {
            throw new BadRequestException(
                    "Payment can only be made for completed bookings");
        }

        if (paymentRepository.findByBooking(booking).isPresent()) {
            throw new BadRequestException(
                    "Payment already exists for this booking");
        }

        Payment payment = Payment.builder()
                .booking(booking)
                .amount(request.getAmount())
                .paymentMethod(request.getPaymentMethod())
                .paymentStatus(PaymentStatus.SUCCESS)
                .build();

        Payment savedPayment = paymentRepository.save(payment);

        return mapToResponse(savedPayment);
    }

    @Override
    public PaymentResponse getPayment(Long paymentId) {

        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Payment not found"));

        return mapToResponse(payment);
    }

    private PaymentResponse mapToResponse(Payment payment) {

        return PaymentResponse.builder()
                .paymentId(payment.getPaymentId())
                .bookingId(payment.getBooking().getBookingId())
                .amount(payment.getAmount())
                .paymentMethod(payment.getPaymentMethod())
                .paymentStatus(payment.getPaymentStatus())
                .paymentDate(payment.getPaymentDate())
                .build();
    }
}