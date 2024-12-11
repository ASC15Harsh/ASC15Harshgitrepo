import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityService } from '../service/facility-service'; 
import { Facility } from '../models/facility.model'; 
import { HotelsService } from '../service/hotels-service'; 
import { Hotel } from '../models/facility.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-facility',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  router = inject(Router);
  facilityService = inject(FacilityService);
  hotelsService = inject(HotelsService); 
  facilities: Facility[] = [];
  hotels: Hotel[] = []; 
  searchTerm: string = '';  
  hotelSearchTerm: string = '';  
  currentFacility: Facility | null = null;  
  newFacility: Facility = { id: '', name: '', hotel: { id: '', name: '', location: '', rating: '', price: '' } };  

  ngOnInit(): void {
    this.loadFacilities();
    this.loadHotels(); 
  }

  loadFacilities(): void {
    this.facilityService.getFacilities().subscribe((data) => {
      this.facilities = data;
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

  deleteFacility(id: string): void {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.loadFacilities(); 
    });
  }

  selectFacilityForEdit(facility: Facility): void {
    this.currentFacility = facility; 
    this.newFacility = { ...facility }; 
  }

  saveFacility(): void {
    if (this.newFacility.id) {
      this.facilityService.updateFacility(this.newFacility).subscribe(() => {
        this.loadFacilities();  
        this.currentFacility = null;  
        this.newFacility = { id: '', name: '', hotel: { id: '', name: '', location: '', rating: '', price: '' } };
      });
    } else {
  
      this.facilityService.addFacility(this.newFacility).subscribe(() => {
        this.loadFacilities(); 
        this.newFacility = { id: '', name: '', hotel: { id: '', name: '', location: '', rating: '', price: '' } }; 
      });
    }
  }

  searchFacilities(): void {
    this.facilityService.getFacilities().subscribe((data) => {
      this.facilities = data.filter((facility) =>
        (this.searchTerm ? facility.name.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
        (this.hotelSearchTerm ? facility.hotel.name.toLowerCase().includes(this.hotelSearchTerm.toLowerCase()) : true)
      );
    });
  }
}
