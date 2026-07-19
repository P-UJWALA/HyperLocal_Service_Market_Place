// package com.hyperlocal.server.entity;

// import java.time.LocalDate;
// import java.time.LocalDateTime;
// import java.time.LocalTime;

// import com.hyperlocal.server.enums.BookingStatus;

// import jakarta.persistantce.Table;
// import jakarta.persistence.Id;
// import jakarta.persistence.Entity;
// import jakarta.persistence.EnumType;
// import jakarta.persistence.Enumerated;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
// import lombok.AllArgsConstructor;
// import lombok.Builder;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Entity
// @Table(name = "bookings")
// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// @Builder
// public class Booking {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long bookingId;

//     // Customer who booked
//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;

//     // Service booked
//     @ManyToOne
//     @JoinColumn(name = "service_id")
//     private Service service;

//     private LocalDate bookingDate;

//     private LocalTime preferredTime;

//     private String address;

//     private Double totalPrice;

//     @Enumerated(EnumType.STRING)
//     private BookingStatus status;

//     private LocalDateTime createdAt;
// }
