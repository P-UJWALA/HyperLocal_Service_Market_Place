package com.hyperlocal.server.dto.category;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryResponse {

    private Long categoryId;

    private String categoryName;

    private String description;

    private String imageUrl;

    private Boolean isActive;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}