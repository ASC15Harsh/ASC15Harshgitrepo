package com.example.tourmanagementsystem.service;

import com.example.tourmanagementsystem.entity.hotels_entity;
import com.example.tourmanagementsystem.repository.hotels_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class hotels_service {

    private final hotels_repository hotelsRepository;

    @Autowired
    public hotels_service(hotels_repository hotelsRepository) {
        this.hotelsRepository = hotelsRepository;
    }

    private static int counter = 1;

    private String generateNextId() {
        hotels_entity lastHotel = hotelsRepository.findTopByOrderByIdDesc();

        if (lastHotel != null) {
            String lastId = lastHotel.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter + 1;
        }

        return "H" + String.format("%03d", counter);
    }

    public hotels_entity createHotel(hotels_entity hotel) {

        String customId = generateNextId();
        hotel.setId(customId);
        return hotelsRepository.save(hotel);
    }

    public List<hotels_entity> getAllhotels() {
        return hotelsRepository.findAll();
    }

    public hotels_entity gethotelsbyId(String id) {
        return hotelsRepository.findById(id).orElse(null);
    }

    public hotels_entity saveHotels(hotels_entity hotels) {
        return hotelsRepository.save(hotels);
    }

    public void deleteHotels(String id) {
        hotelsRepository.deleteById(id);
    }
}
