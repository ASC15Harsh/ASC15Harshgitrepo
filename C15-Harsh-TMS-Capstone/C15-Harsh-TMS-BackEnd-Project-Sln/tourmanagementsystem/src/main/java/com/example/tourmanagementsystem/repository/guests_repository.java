package com.example.tourmanagementsystem.repository;

import com.example.tourmanagementsystem.entity.guests_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface guests_repository extends JpaRepository<guests_entity, String> {
    guests_entity findTopByOrderByIdDesc();
}
