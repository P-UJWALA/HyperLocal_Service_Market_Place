package com.hyperlocal.controller;

import com.hyperlocal.entity.WorkerSkill;
import com.hyperlocal.repository.WorkerSkillRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/worker-skills")
public class WorkerSkillController {

    private final WorkerSkillRepository workerSkillRepository;

    public WorkerSkillController(WorkerSkillRepository workerSkillRepository) {
        this.workerSkillRepository = workerSkillRepository;
    }

    @PostMapping
    public ResponseEntity<WorkerSkill> createSkill(@RequestBody WorkerSkill skill) {
        return ResponseEntity.ok(workerSkillRepository.save(skill));
    }

    @GetMapping
    public ResponseEntity<List<WorkerSkill>> getAllSkills() {
        return ResponseEntity.ok(workerSkillRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkerSkill> getSkillById(@PathVariable Long id) {
        return workerSkillRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkerSkill> updateSkill(@PathVariable Long id, @RequestBody WorkerSkill skill) {
        skill.setSkillId(id);
        return ResponseEntity.ok(workerSkillRepository.save(skill));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
        workerSkillRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
