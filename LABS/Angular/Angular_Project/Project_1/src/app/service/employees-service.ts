import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Employee } from "../model/employees.model"

@Injectable({
    providedIn:'root'
})


export class employeesservice{

    baseUrl : string = "http://localhost:3000/employees"

    constructor(private http:HttpClient){

    }
    getemployee(){
    return this.http.get<Employee[]>(this.baseUrl)
    }
}

