package com.hyperlocal.server.service;

import com.hyperlocal.server.dto.payment.PaymentRequest;
import com.hyperlocal.server.dto.payment.PaymentResponse;

public interface PaymentService {

    PaymentResponse createPayment(PaymentRequest request);

    PaymentResponse getPayment(Long paymentId);

}