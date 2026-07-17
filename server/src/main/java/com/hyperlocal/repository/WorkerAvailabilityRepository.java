package com.hyperlocal.repository;

import com.hyperlocal.entity.WorkerAvailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerAvailabilityRepository extends JpaRepository<WorkerAvailability, Long> {

}