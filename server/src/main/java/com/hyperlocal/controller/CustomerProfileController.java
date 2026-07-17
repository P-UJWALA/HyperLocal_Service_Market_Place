package com.hyperlocal.controller;

import com.hyperlocal.entity.CustomerProfile;
import com.hyperlocal.repository.CustomerProfileRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
public class CustomerProfileController {

    private final CustomerProfileRepository customerProfileRepository;

    public CustomerProfileController(CustomerProfileRepository customerProfileRepository) {
        this.customerProfileRepository = customerProfileRepository;
    }

    @PostMapping
    public ResponseEntity<CustomerProfile> createCustomerProfile(@RequestBody CustomerProfile customerProfile) {
        return ResponseEntity.ok(customerProfileRepository.save(customerProfile));
    }

    @GetMapping
    public ResponseEntity<List<CustomerProfile>> getAllCustomerProfiles() {
        return ResponseEntity.ok(customerProfileRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerProfile> getCustomerProfileById(@PathVariable Long id) {
        return customerProfileRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerProfile> updateCustomerProfile(@PathVariable Long id, @RequestBody CustomerProfile customerProfile) {
        customerProfile.setCustomerId(id);
        return ResponseEntity.ok(customerProfileRepository.save(customerProfile));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomerProfile(@PathVariable Long id) {
        customerProfileRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
