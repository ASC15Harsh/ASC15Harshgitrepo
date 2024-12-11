package com.example.tourmanagementsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "review")
public class reviews_entity {

    @Id
    @Column(name = "ID", nullable = false, length = 4)
    private String id;

    @ManyToOne
    @JoinColumn(name = "HOTEL_ID", referencedColumnName = "ID", foreignKey = @ForeignKey(name = "FK_HOTEL_REVIEW"), nullable = false)
    private hotels_entity hotel;

    @ManyToOne
    @JoinColumn(name = "GUEST_ID", referencedColumnName = "ID", foreignKey = @ForeignKey(name = "FK_GUEST_REVIEW"), nullable = false)
    private guests_entity guest;

    @Column(name = "COMMENTS", nullable = true)
    private String comments;

    public reviews_entity() {
    }

    public reviews_entity(String id, hotels_entity hotel, guests_entity guest, String comments) {
        super();
        this.id = id;
        this.hotel = hotel;
        this.guest = guest;
        this.comments = comments;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public hotels_entity getHotel() {
        return hotel;
    }

    public void setHotel(hotels_entity hotel) {
        this.hotel = hotel;
    }

    public guests_entity getGuest() {
        return guest;
    }

    public void setGuest(guests_entity guest) {
        this.guest = guest;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
