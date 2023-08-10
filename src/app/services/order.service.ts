import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Order } from '../interface/data-type'; // Import the Order interface

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [
    {
      id: 1,
      items: [
        { id: 1, name: 'Product 1', price: 10, quantity: 2 },
        { id: 2, name: 'Product 2', price: 15, quantity: 3 }
      ]
    },
    {
      id: 2,
      items: [
        { id: 3, name: 'Product 3', price: 20, quantity: 1 }
      ]
    }
  ];

  getHardcodedOrders(): Order[] {
    return this.orders;
  }
  // Define a BehaviorSubject for orders
  private ordersSubject = new BehaviorSubject<Order[]>([]);

  placeOrder(order: Order): void {
    this.orders.push(order);
    this.ordersSubject.next(this.orders); // Emit updated orders
  }

  getOrders(): Observable<Order[]> {
    return this.ordersSubject.asObservable();
  }
}
