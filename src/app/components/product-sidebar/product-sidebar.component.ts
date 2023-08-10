import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.css']
})
export class ProductSidebarComponent {
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];

  @Output() categorySelected = new EventEmitter<string>();

  filterProductsByCategory(category: string): void {
    this.categorySelected.emit(category);
  }
}
