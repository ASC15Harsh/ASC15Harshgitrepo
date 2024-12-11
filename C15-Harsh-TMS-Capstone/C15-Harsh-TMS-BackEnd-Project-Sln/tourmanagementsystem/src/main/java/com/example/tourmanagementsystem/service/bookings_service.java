package com.example.tourmanagementsystem.service;

import com.example.tourmanagementsystem.entity.bookings_entity;
import com.example.tourmanagementsystem.entity.hotels_entity;
import com.example.tourmanagementsystem.repository.bookings_repository;
import com.example.tourmanagementsystem.repository.hotels_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class bookings_service {

    private final bookings_repository bookingsRepository;
    private final hotels_repository hotelsRepository;

    @Autowired
    public bookings_service(bookings_repository bookingsRepository, hotels_repository hotelsRepository) {
        this.bookingsRepository = bookingsRepository;
        this.hotelsRepository = hotelsRepository;
    }

    private static int counter = 1;

    private synchronized String generateNextId() {
        bookings_entity lastBooking = bookingsRepository.findTopByOrderByIdDesc();
        if (lastBooking != null) {
            String lastId = lastBooking.getId();
            int lastCounter = Integer.parseInt(lastId.substring(1));
            counter = lastCounter + 1;
        }
        return "B" + String.format("%03d", counter);
    }

    public bookings_entity createBooking(bookings_entity booking) {
        hotels_entity hotel = hotelsRepository.findById(booking.getHotel().getId()).orElse(null);
        if (hotel == null) {
            throw new IllegalArgumentException("Hotel not found");
        }

        if (hotel.getRooms() >= booking.getRoom()) {
            hotel.setRooms(hotel.getRooms() - booking.getRoom());
            hotelsRepository.save(hotel);
            String customId = generateNextId();
            booking.setId(customId);

            return bookingsRepository.save(booking);
        } else {
            throw new IllegalArgumentException("Not enough rooms available for booking");
        }
    }

    public List<bookings_entity> getAllBookings() {
        return bookingsRepository.findAll();
    }

    public bookings_entity getBookingById(String id) {
        return bookingsRepository.findById(id).orElse(null);
    }

    public bookings_entity saveBooking(bookings_entity booking) {
        return bookingsRepository.save(booking);
    }

    public void deleteBooking(String id) {
        bookings_entity booking = bookingsRepository.findById(id).orElse(null);
        if (booking != null) {
            hotels_entity hotel = booking.getHotel();
            hotel.setRooms(hotel.getRooms() + booking.getRoom());
            hotelsRepository.save(hotel);

            bookingsRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Booking not found");
        }
    }

    public bookings_entity updateBooking(String id, bookings_entity updatedBooking) {
        bookings_entity existingBooking = bookingsRepository.findById(id).orElse(null);
        if (existingBooking != null) {
            hotels_entity hotel = existingBooking.getHotel();
            int roomDifference = updatedBooking.getRoom() - existingBooking.getRoom();
            if (roomDifference > 0) {
                if (hotel.getRooms() >= roomDifference) {
                    hotel.setRooms(hotel.getRooms() - roomDifference);
                    hotelsRepository.save(hotel);
                } else {
                    throw new IllegalArgumentException("Not enough rooms available in the hotel");
                }
            }
            else if (roomDifference < 0) {
                hotel.setRooms(hotel.getRooms() + Math.abs(roomDifference));
                hotelsRepository.save(hotel);
            }

            existingBooking.setGuest(updatedBooking.getGuest());
            existingBooking.setHotel(updatedBooking.getHotel());
            existingBooking.setRoom(updatedBooking.getRoom());
            existingBooking.setCheckinDate(updatedBooking.getCheckinDate());
            existingBooking.setCheckoutDate(updatedBooking.getCheckoutDate());

            return bookingsRepository.save(existingBooking);
        } else {
            throw new IllegalArgumentException("Booking not found");
        }
    }
}
