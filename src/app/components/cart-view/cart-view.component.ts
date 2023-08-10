import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order,CartItem } from 'src/app/interface/data-type'; // Import the Order interface

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  @Input() cartItems: any[] = [];
  orderList: any[] = [];

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  removeFromCart(item: any): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartService.updateCart(this.cartItems);
    }
  }

  increaseQuantity(item: any) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    }
    item.quantity++;
  }

  decreaseQuantity(item: any) {
    if (item.quantity === undefined) {
      item.quantity = 0;
    } else if (item.quantity > 0) {
      item.quantity--;
    }
  }

  getTotalPrice(item: any): number {
    return item.price * (item.quantity || 0);
  }

  get grandTotal(): number {
    return this.cartItems.reduce((total, item) => total + this.getTotalPrice(item), 0);
  }

  buyProducts(cartItems: CartItem[]): void {
    // Create an Order object from the cart items
    const order: Order = {
      id: new Date().getTime(), // Use a unique id (timestamp in this case)
      items: cartItems,
      // other order-related data
    };
  
    // Place the order using the order service
    this.orderService.placeOrder(order);
    console.log('placed order',order)
    // Clear the cart
    this.cartService.clearCart();
  }
  
}
