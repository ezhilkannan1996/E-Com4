import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: any; // Assuming a similar data structure for the product

  constructor(private route: ActivatedRoute, private productService: ProductService,private cartService :CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = Number(params.get('id'));
      this.product = this.productService.getProductById(productId);
    });
  }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  isProductAddedToCart(productId: string): boolean {
    return this.cartService.isProductAdded(productId);
  }

  isProductInCart(productId: string): boolean {
    return this.cartService.isProductAdded(productId);
  }
}
