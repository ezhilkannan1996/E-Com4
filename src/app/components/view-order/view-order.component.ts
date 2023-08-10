import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Order, OrderItem } from 'src/app/interface/data-type';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  cartItems: any[] = [];
  orderList: Order[] = []; // Define the orderList property
  totalOrderPrice: number = 0; // Add this property

  constructor(private cartService: CartService,private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.orderList = orders; // Fetch order list and update the property

      // Calculate the total order price after fetching orders
      this.calculateTotalOrderPrice();
    });

    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  calculateTotalOrderPrice(): void {
    this.totalOrderPrice = this.orderList.reduce((total, order) => {
      return (
        total +
        order.items.reduce((orderTotal, item) => {
          return orderTotal + item.price * item.quantity;
        }, 0)
      );
    }, 0);
  }
}
