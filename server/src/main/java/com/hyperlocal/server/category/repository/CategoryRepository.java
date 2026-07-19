package com.hyperlocal.server.category.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hyperlocal.server.category.entity.ServiceCategory;

@Repository
public interface CategoryRepository extends JpaRepository<ServiceCategory, Long> {

    Optional<ServiceCategory> findByCategoryName(String categoryName);

    boolean existsByCategoryName(String categoryName);

    List<ServiceCategory> findByIsActiveTrue();


}
