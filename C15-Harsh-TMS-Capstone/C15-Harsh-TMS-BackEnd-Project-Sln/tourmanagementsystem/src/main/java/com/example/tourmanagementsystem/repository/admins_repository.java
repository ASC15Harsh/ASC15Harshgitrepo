package com.example.tourmanagementsystem.repository;

import com.example.tourmanagementsystem.entity.admins_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface admins_repository extends JpaRepository<admins_entity,String> {
    admins_entity  findTopByOrderByIdDesc();
}
