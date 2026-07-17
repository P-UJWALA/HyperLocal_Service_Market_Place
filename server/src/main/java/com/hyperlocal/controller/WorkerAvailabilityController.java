package com.hyperlocal.controller;

import com.hyperlocal.entity.WorkerAvailability;
import com.hyperlocal.repository.WorkerAvailabilityRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/worker-availability")
public class WorkerAvailabilityController {

    private final WorkerAvailabilityRepository workerAvailabilityRepository;

    public WorkerAvailabilityController(WorkerAvailabilityRepository workerAvailabilityRepository) {
        this.workerAvailabilityRepository = workerAvailabilityRepository;
    }

    @PostMapping
    public ResponseEntity<WorkerAvailability> createAvailability(@RequestBody WorkerAvailability availability) {
        return ResponseEntity.ok(workerAvailabilityRepository.save(availability));
    }

    @GetMapping
    public ResponseEntity<List<WorkerAvailability>> getAllAvailability() {
        return ResponseEntity.ok(workerAvailabilityRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkerAvailability> getAvailabilityById(@PathVariable Long id) {
        return workerAvailabilityRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkerAvailability> updateAvailability(@PathVariable Long id, @RequestBody WorkerAvailability availability) {
        availability.setAvailabilityId(id);
        return ResponseEntity.ok(workerAvailabilityRepository.save(availability));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAvailability(@PathVariable Long id) {
        workerAvailabilityRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
