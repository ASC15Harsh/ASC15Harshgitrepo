// export class Food {
//   id: string = '';       // Unique ID for the food item
//   name: string = '';     // Name of the food (e.g., Pizza, Burger, etc.)
//   description: string = '';  // A description of the food item
//   quantity: number = 0;  // Quantity available in stock
//   price: number = 0;     // Price of the food item
//   category: string = ''; // Category of food (e.g., Main Course, Dessert, etc.)
//   available: boolean = true;  // Availability status (whether the food is available or not)
// }

export class FoodOrder {
  id: string = '';                // Unique ID for the order
  customerName: string = '';      // Customer's full name
  customerPhone: string = '';     // Customer's phone number
  customerEmail: string = '';     // Customer's email address
  deliveryAddress: string = '';   // Delivery address
  deliveryMethod: string = '';    // Delivery method (e.g., 'Delivery' or 'Pickup')
  paymentMethod: string = '';     // Payment method (e.g., 'Credit Card', 'Cash', etc.)
  deliveryInstructions: string = '';  // Special delivery instructions (optional)
  orderStatus: string = 'Pending';   // Order status (e.g., 'Pending', 'Completed', 'Cancelled')
  totalPrice: number = 0;         // Total price
  foodPreferences: { [key: string]: string } = {};
}
