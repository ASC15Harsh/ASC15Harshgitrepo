package com.example.tourmanagementsystem.repository;

import com.example.tourmanagementsystem.entity.reviews_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface reviews_repository extends JpaRepository<reviews_entity, String> {
    reviews_entity findTopByOrderByIdDesc();
}
