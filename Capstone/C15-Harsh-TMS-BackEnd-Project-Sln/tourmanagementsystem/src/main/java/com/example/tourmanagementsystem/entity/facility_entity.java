package com.example.tourmanagementsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "facility")
public class facility_entity {
    @Id
    @Column(name = "ID", nullable = false, length = 255)
    private String id;

    @Column(name = "NAME", nullable = false, length = 225)
    private String name;

    @ManyToOne
    @JoinColumn(name = "HOTEL_ID", referencedColumnName = "ID", nullable = false, foreignKey = @ForeignKey(name = "FK_HOTEL_FACILITY"))
    private hotels_entity hotel;

    public facility_entity() {}

    public facility_entity(String id, String name, hotels_entity hotel) {
        this.id = id;
        this.name = name;
        this.hotel = hotel;
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

    public hotels_entity getHotel() {
        return hotel;
    }

    public void setHotel(hotels_entity hotel) {
        this.hotel = hotel;
    }
}
