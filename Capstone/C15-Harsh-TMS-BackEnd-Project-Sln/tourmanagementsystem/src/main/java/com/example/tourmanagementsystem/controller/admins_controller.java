package com.example.tourmanagementsystem.controller;

import com.example.tourmanagementsystem.entity.admins_entity;
import com.example.tourmanagementsystem.service.admins_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/admins")
@RestController
public class admins_controller {

    private final admins_service adminsService;

    @Autowired
    public admins_controller(admins_service adminsService)
    {
        this.adminsService = adminsService;
    }

    @GetMapping
    public ResponseEntity<List<admins_entity>> getAllAdmins(){
        List<admins_entity> admins = adminsService.getAlladmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<admins_entity> addAdmins(@RequestBody admins_entity newAdmin) {
        admins_entity createdAdmins = adminsService.createAdmin(newAdmin);
        return new ResponseEntity<>(createdAdmins, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<admins_entity> getAdminById(@PathVariable String id) {
        admins_entity admin = adminsService.getadminsbyId(id);
        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<admins_entity> updateAdmin(@PathVariable String id, @RequestBody admins_entity admins) {
        admins_entity existingadmins = adminsService.getadminsbyId(id);
        if (existingadmins != null) {
            existingadmins.setName(admins.getName());
            existingadmins.setEmail(admins.getEmail());
            existingadmins.setPassword(admins.getPassword());
            existingadmins.setPhone_number(admins.getPhone_number());
            adminsService.saveAdmins(existingadmins);
            return new ResponseEntity<>(existingadmins, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAdmins(@PathVariable String id) {
        admins_entity existingadmins = adminsService.getadminsbyId(id);
        if (existingadmins != null) {
            adminsService.deleteAdmins(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
