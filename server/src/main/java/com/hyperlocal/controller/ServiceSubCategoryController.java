package com.hyperlocal.controller;

import com.hyperlocal.entity.ServiceSubCategory;
import com.hyperlocal.repository.ServiceSubCategoryRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategories")
public class ServiceSubCategoryController {

    private final ServiceSubCategoryRepository subCategoryRepository;

    public ServiceSubCategoryController(ServiceSubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    @PostMapping
    public ResponseEntity<ServiceSubCategory> createSubCategory(@RequestBody ServiceSubCategory subCategory) {
        return ResponseEntity.ok(subCategoryRepository.save(subCategory));
    }

    @GetMapping
    public ResponseEntity<List<ServiceSubCategory>> getAllSubCategories() {
        return ResponseEntity.ok(subCategoryRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceSubCategory> getSubCategoryById(@PathVariable Long id) {
        return subCategoryRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceSubCategory> updateSubCategory(@PathVariable Long id, @RequestBody ServiceSubCategory subCategory) {
        subCategory.setSubCategoryId(id);
        return ResponseEntity.ok(subCategoryRepository.save(subCategory));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubCategory(@PathVariable Long id) {
        subCategoryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
