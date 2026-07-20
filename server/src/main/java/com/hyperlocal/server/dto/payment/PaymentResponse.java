package com.hyperlocal.server.dto.payment;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.hyperlocal.server.enums.PaymentStatus;

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
public class PaymentResponse {

    private Long paymentId;

    private Long bookingId;

    private BigDecimal amount;

    private String paymentMethod;

    private PaymentStatus paymentStatus;

    private LocalDateTime paymentDate;

}