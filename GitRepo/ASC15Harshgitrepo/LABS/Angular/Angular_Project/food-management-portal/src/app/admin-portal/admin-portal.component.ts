import { Component, OnInit } from '@angular/core';
import { FoodOrderService } from '../service/food-service';
import { FoodOrder } from '../model/food.model';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {
  // Your component logic here
  orders: FoodOrder[] = [];
  newOrder: FoodOrder = new FoodOrder();
  editingOrder?: FoodOrder;
  highestId: number = 0;
  foodItems = [
    { id: '1', name: 'Pizza', availableQuantities: ['1', '2', '3', '4'] },
    { id: '2', name: 'Burger', availableQuantities: ['1', '2'] },
    { id: '3', name: 'Pasta', availableQuantities: ['1', '2', '3'] },
    { id: '4', name: 'Salad', availableQuantities: ['1', '2'] },
  ];

  constructor(private foodOrderService: FoodOrderService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadOrders();
    this.newOrder.foodPreferences = {};
  }

  loadOrders(): void {
    this.foodOrderService.getOrders().subscribe(data => {
      this.orders = data;
      this.highestId = Math.max(...this.orders.map(order => Number(order.id)), 0);
    });
  }

  addOrder(): void {
    this.newOrder.id = (this.highestId + 1).toString();
    this.foodOrderService.addOrder(this.newOrder).subscribe(() => {
      this.loadOrders();
      this.newOrder = new FoodOrder();
    });
  }

  editOrder(order: FoodOrder): void {
    this.editingOrder = { ...order };
  }

  updateOrder(): void {
    if (this.editingOrder) {
      this.foodOrderService.updateOrder(this.editingOrder).subscribe(() => {
        this.loadOrders();
        this.editingOrder = undefined;
      });
    }
  }

  deleteOrder(id: string): void {
    this.foodOrderService.deleteOrder(Number(id)).subscribe(() => {
      this.loadOrders();
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
