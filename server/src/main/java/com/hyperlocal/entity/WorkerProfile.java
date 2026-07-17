package com.hyperlocal.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "worker_profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class WorkerProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workerId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @Column(nullable = false)
    private String profession;

    private Integer experience;

    @Column(length = 1000)
    private String about;

    @Column(nullable = false)
    private String houseNo;

    @Column(nullable = false)
    private String street;

    @Column(nullable = false)
    private String village;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String district;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String pincode;

    @Builder.Default
    private Double averageRating = 0.0;

    @Builder.Default
    private Integer totalJobsCompleted = 0;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private VerificationStatus verificationStatus = VerificationStatus.PENDING;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private AvailabilityStatus availabilityStatus = AvailabilityStatus.AVAILABLE;
}