package com.example.tourmanagementsystem.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class bookings_entity {

    @Id
    @Column(name = "ID", nullable = false, length = 255)
    private String id;

    @ManyToOne
    @JoinColumn(name = "GUEST_ID", referencedColumnName = "ID", nullable = false, foreignKey = @ForeignKey(name = "FK_GUEST_BOOKING"))
    private guests_entity guest;

    @ManyToOne
    @JoinColumn(name = "HOTEL_ID", referencedColumnName = "ID", nullable = false, foreignKey = @ForeignKey(name = "FK_HOTEL_BOOKING"))
    private hotels_entity hotel;

    @Column(name = "ROOM", nullable = false)
    private int room;

    @Column(name = "CHECKIN_DATE", nullable = false)
    private String checkinDate;

    @Column(name = "CHECKOUT_DATE", nullable = false)
    private String checkoutDate;

    public bookings_entity() {}

    public bookings_entity(String id, guests_entity guest, hotels_entity hotel, int room, String checkinDate, String checkoutDate) {
        this.id = id;
        this.guest = guest;
        this.hotel = hotel;
        this.room = room;
        this.checkinDate = checkinDate;
        this.checkoutDate = checkoutDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public guests_entity getGuest() {
        return guest;
    }

    public void setGuest(guests_entity guest) {
        this.guest = guest;
    }

    public hotels_entity getHotel() {
        return hotel;
    }

    public void setHotel(hotels_entity hotel) {
        this.hotel = hotel;
    }

    public int getRoom() {
        return room;
    }

    public void setRoom(int room) {
        this.room = room;
    }

    public String getCheckinDate() {
        return checkinDate;
    }

    public void setCheckinDate(String checkinDate) {
        this.checkinDate = checkinDate;
    }

    public String getCheckoutDate() {
        return checkoutDate;
    }

    public void setCheckoutDate(String checkoutDate) {
        this.checkoutDate = checkoutDate;
    }
}

