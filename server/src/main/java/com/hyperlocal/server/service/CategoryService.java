package com.hyperlocal.server.service;

import java.util.List;

import com.hyperlocal.server.dto.category.CategoryRequest;
import com.hyperlocal.server.dto.category.CategoryResponse;

public interface CategoryService {

    CategoryResponse createCategory(CategoryRequest request);

    CategoryResponse getCategoryById(Long id);

    List<CategoryResponse> getAllCategories();

    CategoryResponse updateCategory(Long id, CategoryRequest request);

    void deleteCategory(Long id);
}