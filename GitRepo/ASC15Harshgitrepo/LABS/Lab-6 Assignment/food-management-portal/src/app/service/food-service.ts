// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Food } from '../model/food.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class FoodService {
//   baseUrl: string = 'http://localhost:3000/foods';  // API endpoint for foods

//   constructor(private http: HttpClient) {}

//   // Get the list of foods
//   getFoods(): Observable<Food[]> {
//     return this.http.get<Food[]>(this.baseUrl);
//   }

//   // Add a new food item
//  addFood(food: Food): Observable<Food> {
//   return this.http.post<Food>(this.baseUrl, food);
// }


//   // Update a food item
//   updateFood(food: Food): Observable<Food> {
//     return this.http.put<Food>(`${this.baseUrl}/${food.id}`, food);
//   }

//   // Delete a food item by ID
//   deleteFood(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${id}`);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodOrder } from '../model/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodOrderService {

  private apiUrl = 'http://localhost:3000/foods';  // API URL for orders

  constructor(private http: HttpClient) {}

  // Get all food orders
  getOrders(): Observable<FoodOrder[]> {
    return this.http.get<FoodOrder[]>(this.apiUrl);
  }

  // Add a new food order
  addOrder(order: FoodOrder): Observable<void> {
    return this.http.post<void>(this.apiUrl, order);
  }

  // Update an existing food order
  updateOrder(order: FoodOrder): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${order.id}`, order);
  }

  // Delete a food order
  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
