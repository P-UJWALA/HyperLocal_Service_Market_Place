package com.hyperlocal.server.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyperlocal.server.dto.review.ReviewRequest;
import com.hyperlocal.server.dto.review.ReviewResponse;
import com.hyperlocal.server.service.ReviewService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
     @PostMapping
    public ResponseEntity<ReviewResponse> createReview(
            @RequestBody ReviewRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(reviewService.createReview(request));
    }

    @GetMapping("/{reviewId}")
    public ResponseEntity<ReviewResponse> getReview(
            @PathVariable Long reviewId) {

        return ResponseEntity.ok(reviewService.getReview(reviewId));
    }
}
