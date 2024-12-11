package com.example.tourmanagementsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hotel")
public class hotels_entity {

    @Id
    @Column(name = "ID", nullable = false, length = 4)
    private String id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "ROOMS", nullable = false)
    private int rooms;  // Added 'rooms' field

    @Column(name = "LOCATION", nullable = false)
    private String location;

    @Column(name = "RATING", nullable = false)
    private String rating;

    @Column(name = "PRICE", nullable = false)
    private String price;

    public hotels_entity() {
    }

    public hotels_entity(String id, String name, int rooms, String location, String rating, String price) {
        super();
        this.id = id;
        this.name = name;
        this.rooms = rooms;  // Assigning the rooms field
        this.location = location;
        this.rating = rating;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRooms() {
        return rooms;
    }

    public void setRooms(int rooms) {
        this.rooms = rooms;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getRating() {
        return rating;
    }

    public void setRating(String rating) {
        this.rating = rating;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
