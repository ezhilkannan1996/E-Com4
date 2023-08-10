import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private addedProductIds: string[] = [];

  // Define a BehaviorSubject for cart items
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  addToCart(product: any): void {
    this.cartItems.push(product);
    this.addedProductIds.push(product.id); // Add product ID to the list
    this.cartItemsSubject.next(this.cartItems);
  }

  isProductAdded(productId: string): boolean {
    return this.addedProductIds.includes(productId);
  }

  get cartItems$(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([]); // Call .next() on cartItemsSubject
  }

  updateCart(items: any[]): void {
    this.cartItems = items;
    this.cartItemsSubject.next(this.cartItems); // Update cartItems and emit the new value
  }
}
