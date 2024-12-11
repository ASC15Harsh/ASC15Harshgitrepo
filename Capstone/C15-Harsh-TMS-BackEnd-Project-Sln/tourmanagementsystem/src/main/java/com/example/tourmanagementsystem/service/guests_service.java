package com.example.tourmanagementsystem.service;

import com.example.tourmanagementsystem.entity.guests_entity;
import com.example.tourmanagementsystem.repository.guests_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class guests_service {
    private final guests_repository guestsRepository;

    @Autowired
    public guests_service(guests_repository guestsRepository)
    {
        this.guestsRepository = guestsRepository;

    }

    private static int counter = 1;

    private String generateNextId() {
        guests_entity lastGuest = guestsRepository.findTopByOrderByIdDesc();

        if (lastGuest != null) {
            String lastId = lastGuest.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter + 1;
        }

        return "G" + String.format("%03d", counter);
    }

    public guests_entity createGuest(guests_entity guest) {
        String customId = generateNextId();
        guest.setId(customId);
        return guestsRepository.save(guest);
    }

    public List<guests_entity> getAllGuests() {
        return guestsRepository.findAll();
    }

    public guests_entity getGuestById(String id) {
        return guestsRepository.findById(id).orElse(null);
    }

    public guests_entity saveGuest(guests_entity guest) {
        return guestsRepository.save(guest);
    }

    public void deleteGuest(String id) {
        guestsRepository.deleteById(id);
    }
}
