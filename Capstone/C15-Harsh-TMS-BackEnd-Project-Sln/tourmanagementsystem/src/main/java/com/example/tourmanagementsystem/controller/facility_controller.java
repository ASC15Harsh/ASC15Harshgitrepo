package com.example.tourmanagementsystem.controller;

import com.example.tourmanagementsystem.entity.facility_entity;
import com.example.tourmanagementsystem.service.facility_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/facilities")
@RestController
public class facility_controller {

    private final facility_service facilityService;

    @Autowired
    public facility_controller(facility_service facilityService) {
        this.facilityService = facilityService;
    }

    @GetMapping
    public ResponseEntity<List<facility_entity>> getAllFacilities() {
        List<facility_entity> facilities = facilityService.getAllFacilities();
        return new ResponseEntity<>(facilities, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<facility_entity> addFacility(@RequestBody facility_entity newFacility) {
        facility_entity createdFacility = facilityService.createFacility(newFacility);
        return new ResponseEntity<>(createdFacility, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<facility_entity> getFacilityById(@PathVariable String id) {
        facility_entity facility = facilityService.getFacilityById(id);
        if (facility != null) {
            return new ResponseEntity<>(facility, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<facility_entity> updateFacility(@PathVariable String id, @RequestBody facility_entity facility) {
        facility_entity existingFacility = facilityService.getFacilityById(id);
        if (existingFacility != null) {
            existingFacility.setName(facility.getName());
            existingFacility.setHotel(facility.getHotel());
            facilityService.saveFacility(existingFacility);
            return new ResponseEntity<>(existingFacility, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFacility(@PathVariable String id) {
        facility_entity existingFacility = facilityService.getFacilityById(id);
        if (existingFacility != null) {
            facilityService.deleteFacility(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
