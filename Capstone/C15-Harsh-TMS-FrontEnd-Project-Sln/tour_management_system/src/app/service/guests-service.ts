import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { guests } from "../models/guests.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GuestsService {
    baseUrl: string = "http://localhost:8080/api/guests";

    constructor(private http: HttpClient) { }

    getGuests(): Observable<guests[]> {
        return this.http.get<guests[]>(this.baseUrl);
    }

    addGuest(guest: guests): Observable<guests> {
        return this.http.post<guests>(this.baseUrl, guest);
    }

    updateGuest(guest: guests): Observable<guests> {
        return this.http.put<guests>(`${this.baseUrl}/${guest.id}`, guest);
    }

    deleteGuest(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
