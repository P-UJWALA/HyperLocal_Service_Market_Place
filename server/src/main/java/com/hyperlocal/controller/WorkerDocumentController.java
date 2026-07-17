package com.hyperlocal.controller;

import com.hyperlocal.entity.WorkerDocument;
import com.hyperlocal.repository.WorkerDocumentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/worker-documents")
public class WorkerDocumentController {

    private final WorkerDocumentRepository workerDocumentRepository;

    public WorkerDocumentController(WorkerDocumentRepository workerDocumentRepository) {
        this.workerDocumentRepository = workerDocumentRepository;
    }

    @PostMapping
    public ResponseEntity<WorkerDocument> createDocument(@RequestBody WorkerDocument document) {
        return ResponseEntity.ok(workerDocumentRepository.save(document));
    }

    @GetMapping
    public ResponseEntity<List<WorkerDocument>> getAllDocuments() {
        return ResponseEntity.ok(workerDocumentRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkerDocument> getDocumentById(@PathVariable Long id) {
        return workerDocumentRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkerDocument> updateDocument(@PathVariable Long id, @RequestBody WorkerDocument document) {
        document.setDocumentId(id);
        return ResponseEntity.ok(workerDocumentRepository.save(document));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDocument(@PathVariable Long id) {
        workerDocumentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
