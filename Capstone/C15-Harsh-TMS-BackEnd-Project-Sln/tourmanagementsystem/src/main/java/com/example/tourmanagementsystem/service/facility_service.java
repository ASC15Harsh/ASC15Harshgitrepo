package com.example.tourmanagementsystem.service;

import com.example.tourmanagementsystem.entity.facility_entity;
import com.example.tourmanagementsystem.repository.facility_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class facility_service {

    private final facility_repository facilityRepository;

    @Autowired
    public facility_service(facility_repository facilityRepository) {
        this.facilityRepository = facilityRepository;
    }

    private static int counter = 1;

    private String generateNextId() {
        facility_entity lastFacility = facilityRepository.findTopByOrderByIdDesc();

        if (lastFacility != null) {
            String lastId = lastFacility.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter + 1;
        }

        return "F" + String.format("%03d", counter);
    }

    public facility_entity createFacility(facility_entity facility) {

        String customId = generateNextId();
        facility.setId(customId);
        return facilityRepository.save(facility);
    }

    public List<facility_entity> getAllFacilities() {
        return facilityRepository.findAll();
    }

    public facility_entity getFacilityById(String id) {
        return facilityRepository.findById(id).orElse(null);
    }

    public facility_entity saveFacility(facility_entity facility) {
        return facilityRepository.save(facility);
    }

    public void deleteFacility(String id) {
        facilityRepository.deleteById(id);
    }
}
