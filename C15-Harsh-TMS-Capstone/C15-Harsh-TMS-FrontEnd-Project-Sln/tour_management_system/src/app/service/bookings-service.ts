import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/bookings.model'; 

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  baseUrl: string = 'http://localhost:8080/api/bookings'; 

  constructor(private http: HttpClient) { }

 
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.baseUrl);
  }

  
  getBookingById(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.baseUrl}/${id}`);
  }

  addBooking(booking: Booking): Observable<string> {
    return this.http.post<string>(this.baseUrl, booking, { responseType: 'text' as 'json' });
  }

  updateBooking(id: string, booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.baseUrl}/${id}`, booking);
  }

  deleteBooking(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
