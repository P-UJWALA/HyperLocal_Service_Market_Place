package com.hyperlocal.server.service;

import com.hyperlocal.server.dto.review.ReviewRequest;
import com.hyperlocal.server.dto.review.ReviewResponse;

public interface ReviewService {

    ReviewResponse createReview(ReviewRequest request);

    ReviewResponse getReview(Long reviewId);

}