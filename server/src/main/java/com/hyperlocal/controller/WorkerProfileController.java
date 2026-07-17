package com.hyperlocal.controller;

import com.hyperlocal.entity.WorkerProfile;
import com.hyperlocal.repository.WorkerProfileRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workers")
public class WorkerProfileController {

    private final WorkerProfileRepository workerProfileRepository;

    public WorkerProfileController(WorkerProfileRepository workerProfileRepository) {
        this.workerProfileRepository = workerProfileRepository;
    }

    @PostMapping
    public ResponseEntity<WorkerProfile> createWorkerProfile(@RequestBody WorkerProfile workerProfile) {
        return ResponseEntity.ok(workerProfileRepository.save(workerProfile));
    }

    @GetMapping
    public ResponseEntity<List<WorkerProfile>> getAllWorkerProfiles() {
        return ResponseEntity.ok(workerProfileRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkerProfile> getWorkerProfileById(@PathVariable Long id) {
        return workerProfileRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkerProfile> updateWorkerProfile(@PathVariable Long id, @RequestBody WorkerProfile workerProfile) {
        workerProfile.setWorkerId(id);
        return ResponseEntity.ok(workerProfileRepository.save(workerProfile));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkerProfile(@PathVariable Long id) {
        workerProfileRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
