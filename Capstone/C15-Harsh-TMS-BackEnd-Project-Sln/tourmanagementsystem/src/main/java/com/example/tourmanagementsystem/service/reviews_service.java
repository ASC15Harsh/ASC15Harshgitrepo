package com.example.tourmanagementsystem.service;

import com.example.tourmanagementsystem.entity.reviews_entity;
import com.example.tourmanagementsystem.repository.reviews_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class reviews_service {

    private final reviews_repository reviewsRepository;

    @Autowired
    public reviews_service(reviews_repository reviewsRepository) {
        this.reviewsRepository = reviewsRepository;
    }

    private static int counter = 1;

    private String generateNextId() {
        reviews_entity lastReview = reviewsRepository.findTopByOrderByIdDesc();

        if (lastReview != null) {
            String lastId = lastReview.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter + 1;
        }

        return "R" + String.format("%03d", counter);
    }

    public reviews_entity createReview(reviews_entity review) {
        String customId = generateNextId();
        review.setId(customId);
        return reviewsRepository.save(review);
    }

    public List<reviews_entity> getAllReviews() {
        return reviewsRepository.findAll();
    }

    public reviews_entity getReviewById(String id) {
        return reviewsRepository.findById(id).orElse(null);
    }

    public reviews_entity saveReview(reviews_entity review) {
        return reviewsRepository.save(review);
    }

    public void deleteReview(String id) {
        reviewsRepository.deleteById(id);
    }
}
