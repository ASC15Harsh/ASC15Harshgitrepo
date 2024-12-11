import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Reviews } from "../models/reviews.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {
    baseUrl: string = "http://localhost:8080/api/reviews";

    constructor(private http: HttpClient) { }

    getReviews(): Observable<Reviews[]> {
        return this.http.get<Reviews[]>(this.baseUrl);
    }

    addReview(review: Reviews): Observable<Reviews> {
        return this.http.post<Reviews>(this.baseUrl, review);
    }

    updateReview(review: Reviews): Observable<Reviews> {
        return this.http.put<Reviews>(`${this.baseUrl}/${review.id}`, review);
    }

    deleteReview(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
