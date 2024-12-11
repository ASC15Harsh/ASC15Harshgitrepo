import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReviewsService } from '../service/reviews-service';  
import { HotelsService } from '../service/hotels-service';  
import { GuestsService } from '../service/guests-service';  
import { Reviews } from '../models/reviews.model';  
import { Hotel } from '../models/reviews.model'; 
import { Guest } from '../models/reviews.model';  
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  router = inject(Router);
  reviewsService = inject(ReviewsService);
  hotelsService = inject(HotelsService); 
  guestsService = inject(GuestsService); 

  reviews: Reviews[] = [];
  hotels: Hotel[] = []; 
  guests: Guest[] = []; 
  searchTerm: string = '';
  hotelSearchTerm: string = '';
  guestSearchTerm: string = '';
  newReview: Reviews = { 
    id: '', 
    comments: '', 
    hotel: { id: '', name: '', location: '', rating: '', price: '' }, 
    guest: { id: '', name: '', email: '', phone: '', nationality: '' } 
  };
  currentReview: Reviews | null = null;

  ngOnInit(): void {
    this.loadReviews();
    this.loadHotels();
    this.loadGuests();  
  }

  loadReviews(): void {
    this.reviewsService.getReviews().subscribe((data) => {
      this.reviews = data;
    });
  }

  loadHotels(): void {
    this.hotelsService.getHotels().subscribe((data) => {
      this.hotels = data;  
    });
  }

  loadGuests(): void {
    this.guestsService.getGuests().subscribe((data) => {
      this.guests = data;  
    });
  }

  back(): void {
    this.router.navigateByUrl('navbar');
  }

  deleteReview(id: string): void {
    this.reviewsService.deleteReview(id).subscribe(() => {
      this.loadReviews();
    });
  }

  selectReviewForEdit(review: Reviews): void {
    this.currentReview = review;
    this.newReview = { ...review };
  }

  saveReview(): void {
    if (this.newReview.id) {
      this.reviewsService.updateReview(this.newReview).subscribe(() => {
        this.loadReviews();
        this.resetForm();
      });
    } else {
      this.reviewsService.addReview(this.newReview).subscribe(() => {
        this.loadReviews();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.currentReview = null;
    this.newReview = { 
      id: '', 
      comments: '', 
      hotel: { id: '', name: '', location: '', rating: '', price: '' }, 
      guest: { id: '', name: '', email: '', phone: '', nationality: '' }
    };
  }

  searchReviews(): void {
    this.reviewsService.getReviews().subscribe((data) => {
      this.reviews = data.filter((review) =>
        (this.searchTerm ? review.comments.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
        (this.hotelSearchTerm ? review.hotel.name.toLowerCase().includes(this.hotelSearchTerm.toLowerCase()) : true) &&
        (this.guestSearchTerm ? review.guest.name.toLowerCase().includes(this.guestSearchTerm.toLowerCase()) : true)
      );
    });
  }
}
