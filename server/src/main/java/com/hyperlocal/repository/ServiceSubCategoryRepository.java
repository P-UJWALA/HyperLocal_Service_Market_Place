package com.hyperlocal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hyperlocal.entity.ServiceSubCategory;

@Repository
public interface ServiceSubCategoryRepository extends JpaRepository<ServiceSubCategory, Long> {

}