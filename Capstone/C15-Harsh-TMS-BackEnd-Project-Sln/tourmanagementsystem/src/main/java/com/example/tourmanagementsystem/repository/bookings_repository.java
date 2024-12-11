package com.example.tourmanagementsystem.repository;

import com.example.tourmanagementsystem.entity.bookings_entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface bookings_repository extends JpaRepository<bookings_entity, String> {
    bookings_entity findTopByOrderByIdDesc();
}
