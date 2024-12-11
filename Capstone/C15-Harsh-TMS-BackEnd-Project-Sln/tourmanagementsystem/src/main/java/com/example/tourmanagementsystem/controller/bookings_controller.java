package com.example.tourmanagementsystem.controller;

import com.example.tourmanagementsystem.entity.bookings_entity;
import com.example.tourmanagementsystem.service.bookings_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/bookings")
@RestController
public class bookings_controller {

    private final bookings_service bookingsService;

    @Autowired
    public bookings_controller(bookings_service bookingsService) {
        this.bookingsService = bookingsService;
    }

    @GetMapping
    public ResponseEntity<List<bookings_entity>> getAllBookings() {
        List<bookings_entity> bookings = bookingsService.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> addBooking(@RequestBody bookings_entity newBooking) {
        try {
            bookings_entity createdBooking = bookingsService.createBooking(newBooking);
            return new ResponseEntity<>("Booking created successfully with ID: " + createdBooking.getId(), HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);  // Return error message if rooms are not available
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<bookings_entity> getBookingById(@PathVariable String id) {
        bookings_entity booking = bookingsService.getBookingById(id);
        if (booking != null) {
            return new ResponseEntity<>(booking, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBooking(@PathVariable String id, @RequestBody bookings_entity booking) {
        try {
            bookings_entity updatedBooking = bookingsService.updateBooking(id, booking);
            return new ResponseEntity<>(updatedBooking, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            // Return the error message as a string
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable String id) {
        try {
            bookingsService.deleteBooking(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // Return error if booking not found
        }
    }
}
