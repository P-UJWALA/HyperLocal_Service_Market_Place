package com.hyperlocal.server.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hyperlocal.server.category.entity.ServiceCategory;
import com.hyperlocal.server.category.repository.CategoryRepository;
import com.hyperlocal.server.dto.category.CategoryRequest;
import com.hyperlocal.server.dto.category.CategoryResponse;
import com.hyperlocal.server.exception.DuplicateResourceException;
import com.hyperlocal.server.exception.ResourceNotFoundException;
import com.hyperlocal.server.service.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService
{
    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponse createCategory(CategoryRequest request) {
    if (categoryRepository.existsByCategoryName(request.getCategoryName())) {
    throw new DuplicateResourceException("Category already exists");
     }
     ServiceCategory category = mapToEntity(request);
     ServiceCategory savedCategory = categoryRepository.save(category);
        return mapToResponse(savedCategory);
    }

  @Override
public void deleteCategory(Long id) {

    ServiceCategory category = categoryRepository.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Category not found with id : " + id));

    category.setIsActive(false);

    categoryRepository.save(category);
}

    @Override
    public List<CategoryResponse> getAllCategories() {
        List<ServiceCategory> categories = categoryRepository.findByIsActiveTrue();

    return categories.stream()
            .map(this::mapToResponse)
            .toList();
    }

    @Override
    public CategoryResponse getCategoryById(Long id) {
        ServiceCategory category = categoryRepository.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Category not found with id: " + id));

    return mapToResponse(category);
    }

   @Override
public CategoryResponse updateCategory(Long id, CategoryRequest request) {

    ServiceCategory category = categoryRepository.findById(id)
            .orElseThrow(() ->
                    new ResourceNotFoundException("Category not found with id : " + id));

    if (!category.getCategoryName().equalsIgnoreCase(request.getCategoryName())
            && categoryRepository.existsByCategoryName(request.getCategoryName())) {

        throw new DuplicateResourceException("Category already exists");
    }

    category.setCategoryName(request.getCategoryName());
    category.setDescription(request.getDescription());
    category.setImageUrl(request.getImageUrl());

    ServiceCategory updatedCategory = categoryRepository.save(category);

    return mapToResponse(updatedCategory);
}
    
    private ServiceCategory mapToEntity(CategoryRequest request) {

    return ServiceCategory.builder()
            .categoryName(request.getCategoryName())
            .description(request.getDescription())
            .imageUrl(request.getImageUrl())
            .build();
}

    private CategoryResponse mapToResponse(ServiceCategory category) {
        return CategoryResponse.builder()
                .categoryId(category.getCategoryId())
                .categoryName(category.getCategoryName())
                .description(category.getDescription())
                .imageUrl(category.getImageUrl())
                .isActive(category.getIsActive())
                .createdAt(category.getCreatedAt())
                .updatedAt(category.getUpdatedAt())
                .build();
    }
}
