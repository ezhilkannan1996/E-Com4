import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/data-type';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() orderList: Order[] = []; // Initialize as an empty array

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      // this.orderList = orders; // Update the orderList when orders are received
      this.orderList = this.orderService.getHardcodedOrders();
    });
  }

  cancelOrder(order: Order): void {
    const index = this.orderList.indexOf(order);
    if (index !== -1) {
      this.orderList.splice(index, 1);
    }
  }
}
