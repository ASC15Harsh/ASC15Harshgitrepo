package com.example.tourmanagementsystem.controller;

import com.example.tourmanagementsystem.entity.hotels_entity;
import com.example.tourmanagementsystem.service.hotels_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/hotels")
@RestController
public class hotels_controller {

    private final hotels_service hotelsService;

    @Autowired
    public hotels_controller(hotels_service hotelsService) {
        this.hotelsService = hotelsService;
    }

    @GetMapping
    public ResponseEntity<List<hotels_entity>> getAllHotels() {
        List<hotels_entity> hotels = hotelsService.getAllhotels();
        return new ResponseEntity<>(hotels, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<hotels_entity> addHotels(@RequestBody hotels_entity newHotel) {
        hotels_entity createdHotels = hotelsService.createHotel(newHotel);
        return new ResponseEntity<>(createdHotels, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<hotels_entity> getHotelById(@PathVariable String id) {
        hotels_entity hotel = hotelsService.gethotelsbyId(id);
        if (hotel != null) {
            return new ResponseEntity<>(hotel, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<hotels_entity> updateHotel(@PathVariable String id, @RequestBody hotels_entity hotels) {
        hotels_entity existinghotels = hotelsService.gethotelsbyId(id);
        if (existinghotels != null) {
            existinghotels.setName(hotels.getName());
            existinghotels.setLocation(hotels.getLocation());
            existinghotels.setRating(hotels.getRating());
            existinghotels.setPrice(hotels.getPrice());
            existinghotels.setRooms(hotels.getRooms());  // Set rooms during update
            hotelsService.saveHotels(existinghotels);
            return new ResponseEntity<>(existinghotels, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable String id) {
        hotels_entity existinghotels = hotelsService.gethotelsbyId(id);
        if (existinghotels != null) {
            hotelsService.deleteHotels(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
