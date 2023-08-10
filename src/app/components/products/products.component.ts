import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems: number = 0;
  filteredProducts: any[] = [];
  searchQuery: string = '';
  selectedSortOption: string = 'lowToHigh'; // Default sorting option

  constructor(private productService: ProductService, private cartService: CartService,private AlertService: AlertService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.totalItems = this.products.length;
    this.sortProducts(); // Initial sorting based on default option
  }

  getPaginatedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.AlertService.showAlert();
  }

  onSearchChange(): void {
    this.filteredProducts = this.productService.searchProducts(this.searchQuery);
    this.totalItems = this.filteredProducts.length;
    this.currentPage = 1;
    this.sortProducts(); // Sort after filtering
  }

  onSortChange(): void {
    this.sortProducts();
  }

  sortProducts(): void {
    if (this.selectedSortOption === 'lowToHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.selectedSortOption === 'highToLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
}
