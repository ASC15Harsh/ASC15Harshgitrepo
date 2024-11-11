import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../service/food-service';  // Import FoodOrderService
import { FoodOrder } from '../model/food.model';  // Import FoodOrder model
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  orders: FoodOrder[] = [];  // Array to store food orders
  newOrder: FoodOrder = new FoodOrder();  // New food order object for adding
  highestId: number = 0;  // Track the highest ID for manual ID generation
  foodItems = [
    { id: '1', name: 'Pizza', availableQuantities: ['1', '2', '3', '4'] },
    { id: '2', name: 'Burger', availableQuantities: ['1', '2'] },
    { id: '3', name: 'Pasta', availableQuantities: ['1', '2', '3'] },
    { id: '4', name: 'Salad', availableQuantities: ['1', '2'] },
  ];  // List of food items available for selection

  showModal: boolean = false;  // Flag to control the visibility of the modal

  constructor(private foodOrderService: FoodOrderService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loadOrders();  // Load food orders when component initializes
    this.newOrder.foodPreferences = {};
  }

  loadOrders(): void {
    this.foodOrderService.getOrders().subscribe(data => {
      this.orders = data;

      // After loading orders, determine the highest ID in the list
      this.highestId = Math.max(...this.orders.map(order => Number(order.id)), 0);
    });
  }

  addOrder(): void {
    // Manually assign the next ID based on the highest ID
    this.newOrder.id = (this.highestId + 1).toString();  // Increment the ID

    this.foodOrderService.addOrder(this.newOrder).subscribe(() => {
      this.loadOrders();  // Reload orders list after adding new order
      this.newOrder = new FoodOrder();  // Reset new order form

      // Show success modal
      this.showModal = true;
    });
  }

  navigate() {
    this.router.navigate(['']);
  }

  closeModal() {
    this.showModal = false;  // Hide modal when close button is clicked
  }
}
