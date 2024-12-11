package com.example.tourmanagementsystem.controller;

import com.example.tourmanagementsystem.entity.guests_entity;
import com.example.tourmanagementsystem.service.guests_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/guests")
@RestController
public class guests_controller {

    private final guests_service guestsService;

    @Autowired
    public guests_controller(guests_service guestsService) {
        this.guestsService = guestsService;
    }

    @GetMapping
    public ResponseEntity<List<guests_entity>> getAllGuests() {
        List<guests_entity> guests = guestsService.getAllGuests();
        return new ResponseEntity<>(guests, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<guests_entity> addGuest(@RequestBody guests_entity newGuest) {
        guests_entity createdGuests = guestsService.createGuest(newGuest);
        return new ResponseEntity<>(createdGuests, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<guests_entity> getGuestById(@PathVariable String id) {
        guests_entity guest = guestsService.getGuestById(id);
        if (guest != null) {
            return new ResponseEntity<>(guest, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<guests_entity> updateGuest(@PathVariable String id, @RequestBody guests_entity guest) {
        guests_entity existingGuest = guestsService.getGuestById(id);
        if (existingGuest != null) {
            existingGuest.setName(guest.getName());
            existingGuest.setEmail(guest.getEmail());
            existingGuest.setPhone(guest.getPhone());
            existingGuest.setNationality(guest.getNationality());
            guestsService.saveGuest(existingGuest);
            return new ResponseEntity<>(existingGuest, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGuest(@PathVariable String id) {
        guests_entity existingGuest = guestsService.getGuestById(id);
        if (existingGuest != null) {
            guestsService.deleteGuest(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
