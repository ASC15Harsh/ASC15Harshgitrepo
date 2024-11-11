import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../service/food-service';  // Import FoodOrderService
import { FoodOrder } from '../model/food.model';  // Import FoodOrder model
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-user-portal',
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.css']
})
export class UserPortalComponent implements OnInit {
  orders: FoodOrder[] = [];  // Array to store food orders
  newOrder: FoodOrder = new FoodOrder();  // New food order object for adding
  editingOrder?: FoodOrder;  // Food order being edited
  highestId: number = 0;  // Track the highest ID for manual ID generation
  foodItems = [
    { id: '1', name: 'Pizza', availableQuantities: ['1', '2', '3', '4'] },
    { id: '2', name: 'Burger', availableQuantities: ['1', '2'] },
    { id: '3', name: 'Pasta', availableQuantities: ['1', '2', '3'] },
    { id: '4', name: 'Salad', availableQuantities: ['1', '2'] },
  ];  // List of food items available for selection

  constructor(private foodOrderService: FoodOrderService, private authService: AuthService) {}

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
    });
  }

  editOrder(order: FoodOrder): void {
    this.editingOrder = { ...order };  // Clone the order to edit it
  }

  updateOrder(): void {
    if (this.editingOrder) {
      this.foodOrderService.updateOrder(this.editingOrder).subscribe(() => {
        this.loadOrders();  // Reload orders list after updating
        this.editingOrder = undefined;  // Clear the edit mode
      });
    }
  }

  deleteOrder(id: string): void {
    this.foodOrderService.deleteOrder(Number(id)).subscribe(() => {
      this.loadOrders();  // Reload orders list after deletion
    });
  }
  logout(): void {
    this.authService.logout();
  }
}
