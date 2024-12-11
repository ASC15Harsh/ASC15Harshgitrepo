import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from '../service/hotels-service'; 
import { hotels } from '../models/hotels.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  router = inject(Router);
  hotelsService = inject(HotelsService);
  hotels: hotels[] = [];
  searchTerm: string = '';
  currentHotel: hotels | null = null; 
  newHotel: hotels = { id: '', name: '', location: '', rating: '', price: '', rooms: 0 }; 

  
  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(): void {
    this.hotelsService.getHotels().subscribe((data) => {
      this.hotels = data;
    });
  }

  back(): void {
    this.router.navigateByUrl('navbar');
  }

  deleteHotel(id: string): void {
    this.hotelsService.deleteHotel(id).subscribe(() => {
      this.loadHotels(); 
    });
  }

  selectHotelForEdit(hotel: hotels): void {
    this.currentHotel = hotel; 
    this.newHotel = { ...hotel }; 
  }

  saveHotel(): void {
    if (this.newHotel.id) {
      this.hotelsService.updateHotel(this.newHotel).subscribe(() => {
        this.loadHotels(); 
        this.currentHotel = null; 
        this.newHotel = { id: '', name: '', location: '', rating: '', price: '', rooms: 0 }; 
      });
    } else {
     
      this.hotelsService.addHotel(this.newHotel).subscribe(() => {
        this.loadHotels(); 
        this.newHotel = { id: '', name: '', location: '', rating: '', price: '', rooms: 0 };
      });
    }
  }

  searchHotels(): void {
    if (this.searchTerm) {
      this.hotels = this.hotels.filter((hotel) =>
        hotel.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.loadHotels();
    }
  }
}
