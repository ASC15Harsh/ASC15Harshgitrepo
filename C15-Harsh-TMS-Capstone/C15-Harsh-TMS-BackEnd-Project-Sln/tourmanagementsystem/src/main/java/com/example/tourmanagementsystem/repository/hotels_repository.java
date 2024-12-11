package com.example.tourmanagementsystem.repository;

import com.example.tourmanagementsystem.entity.hotels_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface hotels_repository extends JpaRepository<hotels_entity, String> {
    hotels_entity findTopByOrderByIdDesc();
}
