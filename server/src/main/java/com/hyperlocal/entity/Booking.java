package com.hyperlocal.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private CustomerProfile customer;

    @ManyToOne
    @JoinColumn(name = "worker_id")
    private WorkerProfile worker;

    @ManyToOne
    @JoinColumn(name = "subcategory_id", nullable = false)
    private ServiceSubCategory service;

    @Column(nullable = false)
    private String bookingAddress;

    @Column(length = 1000)
    private String problemDescription;

    private LocalDateTime bookingDateTime;

    private Double estimatedPrice;

    private Double finalPrice;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private BookingStatus status = BookingStatus.PENDING;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    @PrePersist
    public void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();

        if (bookingDateTime == null) {
            bookingDateTime = LocalDateTime.now();
        }
    }

    @PreUpdate
    public void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

}