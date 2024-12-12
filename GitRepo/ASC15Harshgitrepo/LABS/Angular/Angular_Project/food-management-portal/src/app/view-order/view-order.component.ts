import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../service/food-service';  // Import FoodOrderService
import { FoodOrder } from '../model/food.model';  // Import FoodOrder model
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  orders: FoodOrder[] = [];  // Array to store food orders
  filteredOrders: FoodOrder[] = [];  // Array to store filtered food orders based on filter criteria
  filters = {                // Filter criteria for each field
    orderId: '',
    customerName: '',
    phone: '',
    email: ''
  };
  newOrder: FoodOrder = new FoodOrder();  // New food order object for adding
  highestId: number = 0;  // Track the highest ID for manual ID generation
  foodItems = [
    { id: '1', name: 'Pizza', availableQuantities: ['1', '2', '3', '4'] },
    { id: '2', name: 'Burger', availableQuantities: ['1', '2'] },
    { id: '3', name: 'Pasta', availableQuantities: ['1', '2', '3'] },
    { id: '4', name: 'Salad', availableQuantities: ['1', '2'] },
  ];  // List of food items available for selection

  constructor(
    private foodOrderService: FoodOrderService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadOrders();  // Load food orders when component initializes
    this.newOrder.foodPreferences = {};
  }

  loadOrders(): void {
    this.foodOrderService.getOrders().subscribe((data) => {
      this.orders = data;
      this.filteredOrders = data;  // Initially, all orders are displayed

      // After loading orders, determine the highest ID in the list
      this.highestId = Math.max(...this.orders.map((order) => Number(order.id)), 0);
    });
  }

  // Filter function to apply filters to the orders
  onFilterChange(): void {
    this.filteredOrders = this.orders.filter((order) => {
      return (
        // Filter by Order ID
        (this.filters.orderId === '' || order.id.toString().includes(this.filters.orderId)) &&

        // Filter by Customer Name
        (this.filters.customerName === '' || order.customerName.toLowerCase().includes(this.filters.customerName.toLowerCase())) &&

        // Filter by Phone Number
        (this.filters.phone === '' || order.customerPhone.includes(this.filters.phone)) &&

        // Filter by Email
        (this.filters.email === '' || order.customerEmail.toLowerCase().includes(this.filters.email.toLowerCase()))
      );
    });
  }

  // Navigate to main screen
  navigate(): void {
    this.router.navigate(['']);
  }
}
