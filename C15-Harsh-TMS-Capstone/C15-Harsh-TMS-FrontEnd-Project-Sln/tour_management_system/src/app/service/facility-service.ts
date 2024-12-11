import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facility } from '../models/facility.model';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  baseUrl: string = 'http://localhost:8080/api/facilities'; 

  constructor(private http: HttpClient) { }

  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.baseUrl);
  }


  addFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.baseUrl, facility);
  }

  updateFacility(facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${this.baseUrl}/${facility.id}`, facility);
  }

  deleteFacility(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
