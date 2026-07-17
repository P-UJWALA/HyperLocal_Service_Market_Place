package com.hyperlocal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hyperlocal.entity.Rating;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long> {

}