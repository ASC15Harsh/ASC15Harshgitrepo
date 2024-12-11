import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingsService } from '../service/bookings-service';
import { Booking } from '../models/bookings.model';
import { GuestsService } from '../service/guests-service';
import { HotelsService } from '../service/hotels-service';
import { Guest } from '../models/bookings.model';
import { Hotel } from '../models/facility.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  router = inject(Router);
  bookingsService = inject(BookingsService);
  guestsService = inject(GuestsService); 
  hotelsService = inject(HotelsService);  

  bookings: Booking[] = [];
  allBookings: Booking[] = [];  
  guests: Guest[] = []; 
  hotels: Hotel[] = [];  
  searchTerm: string = '';  
  guestSearchTerm: string = '';  
  hotelSearchTerm: string = ''; 
  currentBooking: Booking | null = null; 
  newBooking: Booking = this.createEmptyBooking(); 
  successMessage: string = ''; 

  minCheckinDate: string = new Date().toISOString().split("T")[0];


  ngOnInit(): void {
    this.loadBookings();
    this.loadGuests();  
    this.loadHotels();  
  }

  loadBookings(): void {
    this.bookingsService.getBookings().subscribe((data) => {
      this.bookings = data;
      this.allBookings = [...data]; 
    }, (error) => {
      console.error('Error loading bookings:', error); 
    });
  }
  

  loadGuests(): void {
    this.guestsService.getGuests().subscribe((data) => {
      this.guests = data;  
    });
  }

  loadHotels(): void {
    this.hotelsService.getHotels().subscribe((data) => {
      this.hotels = data;  
    });
  }

  back(): void {
    this.router.navigateByUrl('navbar');
  }

  deleteBooking(id: string): void {
    this.bookingsService.deleteBooking(id).subscribe(() => {
      this.loadBookings();  
    });
  }

  selectBookingForEdit(booking: Booking): void {
    this.currentBooking = booking;  
    this.newBooking = { ...booking };  
  }

  saveBooking(): void {
    const checkinDate = new Date(this.newBooking.checkinDate);
    const checkoutDate = new Date(this.newBooking.checkoutDate);
    const currentDate = new Date();

    if (checkinDate < currentDate) {
      alert("Check-in date cannot be in the past.");
      return;
    }

    if (checkoutDate < checkinDate) {
      alert("Checkout date cannot be before check-in date.");
      return;
    }
    if (this.newBooking.id) {
      this.bookingsService.updateBooking(this.newBooking.id, this.newBooking).subscribe(() => {
        this.loadBookings();  
        this.clearForm();  
        this.successMessage = "Booking updated successfully!"; 
      });
    } else {
     
      this.bookingsService.addBooking(this.newBooking).subscribe(
        (response: string) => {  
          const bookingIdMatch = response.match(/ID: (\w+)/);
  
          if (bookingIdMatch) {
            const newBookingId = bookingIdMatch[1];
            this.newBooking.id = newBookingId; 
            this.bookings.push({ ...this.newBooking });
          }
  
          this.loadBookings();  
          this.clearForm(); 
          this.successMessage = `Booking created successfully with ID: ${response.split('ID: ')[1]}`;
        },
        (error) => {
          console.error('Error adding booking:', error); 
        }
      );
    }
  }
  
  searchBookings(): void {
    this.bookings = this.allBookings.filter((booking) =>
      (this.searchTerm ? booking.id.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
      (this.guestSearchTerm ? booking.guest.name.toLowerCase().includes(this.guestSearchTerm.toLowerCase()) : true) &&
      (this.hotelSearchTerm ? booking.hotel.name.toLowerCase().includes(this.hotelSearchTerm.toLowerCase()) : true)
    );
  }

  clearForm(): void {
    this.newBooking = this.createEmptyBooking();
    this.currentBooking = null;
    this.searchTerm = '';
    this.guestSearchTerm = '';
    this.hotelSearchTerm = '';
    this.bookings = [...this.allBookings];  
  }

  createEmptyBooking(): Booking {
    return {
      id: '',
      guest: { id: '', name: '', email: '', phone: '', nationality: '' },
      hotel: { id: '', name: '', location: '', rating: '', price: '' },
      room: 1,
      checkinDate: '',
      checkoutDate: ''
    };
  }
}
