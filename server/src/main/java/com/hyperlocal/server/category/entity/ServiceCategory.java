package com.hyperlocal.server.category.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "service_categories")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ServiceCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(nullable = false, unique = true, length = 100)
    private String categoryName;

    @Column(length = 500)
    private String description;

    private String imageUrl;

    @Builder.Default
    private Boolean isActive = true;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }
    public Boolean getIsActive() {
        return isActive;
    }
    public Long getCategoryId() {
        return categoryId;
    }
    public String getCategoryName() {
        return categoryName;
    }
    public String getDescription() {
        return description;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
