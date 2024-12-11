package com.example.tourmanagementsystem.controller;

import com.example.tourmanagementsystem.entity.reviews_entity;
import com.example.tourmanagementsystem.service.reviews_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/reviews")
@RestController
public class reviews_controller {

    private final reviews_service reviewsService;

    @Autowired
    public reviews_controller(reviews_service reviewsService) {
        this.reviewsService = reviewsService;
    }

    @GetMapping
    public ResponseEntity<List<reviews_entity>> getAllReviews() {
        List<reviews_entity> reviews = reviewsService.getAllReviews();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<reviews_entity> addReview(@RequestBody reviews_entity newReview) {
        reviews_entity createdReview = reviewsService.createReview(newReview);
        return new ResponseEntity<>(createdReview, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<reviews_entity> getReviewById(@PathVariable String id) {
        reviews_entity review = reviewsService.getReviewById(id);
        if (review != null) {
            return new ResponseEntity<>(review, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<reviews_entity> updateReview(@PathVariable String id, @RequestBody reviews_entity review) {
        reviews_entity existingReview = reviewsService.getReviewById(id);
        if (existingReview != null) {
            existingReview.setComments(review.getComments());
            reviewsService.saveReview(existingReview);
            return new ResponseEntity<>(existingReview, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable String id) {
        reviews_entity existingReview = reviewsService.getReviewById(id);
        if (existingReview != null) {
            reviewsService.deleteReview(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
