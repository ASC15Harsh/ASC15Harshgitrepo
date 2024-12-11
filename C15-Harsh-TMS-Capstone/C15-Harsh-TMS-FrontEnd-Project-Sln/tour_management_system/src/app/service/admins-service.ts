import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { admins } from "../models/admins.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    baseUrl: string = "http://localhost:8080/api/admins";

    constructor(private http: HttpClient) { }

    getadmins(): Observable<admins[]> {
        return this.http.get<admins[]>(this.baseUrl);
    }

    addadmins(admins: admins): Observable<admins> {
        return this.http.post<admins>(this.baseUrl, admins);
    }

    updateadmins(admins: admins): Observable<admins> {
        return this.http.put<admins>(`${this.baseUrl}/${admins.id}`, admins);
    }

    deleteadmins(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
    
}
