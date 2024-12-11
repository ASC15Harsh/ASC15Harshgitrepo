import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { hotels } from "../models/hotels.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HotelsService {
    baseUrl: string = "http://localhost:8080/api/hotels";

    constructor(private http: HttpClient) { }

    getHotels(): Observable<hotels[]> {
        return this.http.get<hotels[]>(this.baseUrl);
    }

    addHotel(hotel: hotels): Observable<hotels> {
        return this.http.post<hotels>(this.baseUrl, hotel);
    }

    updateHotel(hotel: hotels): Observable<hotels> {
        return this.http.put<hotels>(`${this.baseUrl}/${hotel.id}`, hotel);
    }

    deleteHotel(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
