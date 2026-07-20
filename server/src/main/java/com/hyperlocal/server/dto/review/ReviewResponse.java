package com.hyperlocal.server.dto.review;

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
public class ReviewResponse {

    private Long reviewId;

    private Long bookingId;

    private String customerName;

    private String providerName;

    private Integer rating;

    private String review;

}