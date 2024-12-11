package com.example.tourmanagementsystem.service;

import com.example.tourmanagementsystem.entity.admins_entity;
import com.example.tourmanagementsystem.repository.admins_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class admins_service {

    private final admins_repository adminsRepository;

    @Autowired
    public admins_service(admins_repository adminsRepository) {
        this.adminsRepository = adminsRepository;
    }

    private static int counter = 1;


    private String generateNextId() {

        admins_entity lastAdmin = adminsRepository.findTopByOrderByIdDesc();

        if (lastAdmin != null) {

            String lastId = lastAdmin.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter + 1;
        }
        return "A" + String.format("%03d", counter);
    }

    public admins_entity createAdmin(admins_entity admin) {
        String customId = generateNextId();
        admin.setId(customId);
        return adminsRepository.save(admin);
    }

    public List<admins_entity> getAlladmins() {
        return adminsRepository.findAll();
    }

    public admins_entity getadminsbyId(String id) {
        return adminsRepository.findById(id).orElse(null);
    }

    public admins_entity saveAdmins(admins_entity admins) {
        return adminsRepository.save(admins);
    }

    public void deleteAdmins(String id) {
        adminsRepository.deleteById(id);
    }
}
