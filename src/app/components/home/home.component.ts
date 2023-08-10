import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://via.placeholder.com/300'
    },
    // Add more products as needed
  ];

  carouselOptions = {
    loop: true,
    items: 3,
    margin: 20,
    dots: true,
    nav: true,
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
