package com.example.tourmanagementsystem.repository;

import com.example.tourmanagementsystem.entity.facility_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface facility_repository extends JpaRepository<facility_entity, String> {
    facility_entity findTopByOrderByIdDesc();
}
