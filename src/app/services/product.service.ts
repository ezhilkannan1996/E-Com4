import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products: any[] = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'Description for Product 1',
  //     price: 99.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     description: 'Description for Product 2',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 3,
  //     name: 'Product 3',
  //     description: 'Description for Product 3',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 4,
  //     name: 'Product 4',
  //     description: 'Description for Product 4',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 5,
  //     name: 'Product 5',
  //     description: 'Description for Product 5',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 6,
  //     name: 'Product 6',
  //     description: 'Description for Product 6',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 7,
  //     name: 'Product 7',
  //     description: 'Description for Product 7',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 8,
  //     name: 'Product 8',
  //     description: 'Description for Product 8',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 9,
  //     name: 'Product 9',
  //     description: 'Description for Product 9',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 10,
  //     name: 'Product 10',
  //     description: 'Description for Product 10',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 11,
  //     name: 'Product 11',
  //     description: 'Description for Product 11',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 12,
  //     name: 'Product 12',
  //     description: 'Description for Product 12',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   },
  //   {
  //     id: 13,
  //     name: 'Product 13',
  //     description: 'Description for Product 13',
  //     price: 149.99,
  //     imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  //   }
  // ];

  private products: any[]  = [
    { id: 1, name: 'realme 11 Pro+ 5G (Sunrise Beige, 256 GB)  (8 GB RAM)', category: 'phone', price: 10000,  imageUrl: '/assets/images/realme 11 pro.webp'  ,description:'', quantity:1,favorite:true},
    { id: 2, name: 'SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)  (6 GB RAM)', category: 'phone', price: 11000, imageUrl: '/assets/images/-original-imagcg22czc3ggvw.webp',description :'', quantity:1,favorite:true},
    { id: 3, name: 'vivo T2 5G (Nitro Blaze, 128 GB)  (6 GB RAM)', category: 'phone', price: 11500, imageUrl: '/assets/images/vivoT2.webp',description:'' , quantity:0,favorite:true},
    { id: 4, name: 'SAMSUNG Galaxy F54 5G (Stardust Silver, 256 GB)  (8 GB RAM)', category: 'phone', price: 12000, imageUrl: '/assets/images/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.webp'  ,description:'', quantity:1,favorite:true},
    { id: 5, name: 'APPLE iPhone 14 (Midnight, 128 GB)', category: 'phone', price: 60000, imageUrl: '/assets/images/iphone14.webp' ,description:'' , quantity:1,favorite:true},
    { id: 6, name: 'MOTOROLA Edge 40 (Nebula Green, 256 GB)  (8 GB RAM)', category: 'phone', price: 14000,  imageUrl: '/assets/images/edge-40.webp'  ,description:'', quantity:1,favorite:true},
    { id: 7, name: 'REDMI Note 12 (Sunrise Gold, 64 GB)  (6 GB RAM)', category: 'phone', price: 14500,imageUrl: '/assets/images/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.webp' ,description:'', quantity:1,favorite:true},
    { id: 8, name: 'Infinix Smart 7 HD (Green Apple, 64 GB)  (2 GB RAM)', category: 'phone', price: 15000, imageUrl: '/assets/images/infinix7x.webp' ,description:'', quantity:1,favorite:true },
    { id: 9, name: 'POCO C51 Power Black, 64 GB)  (4 GB RAM)', category: 'phone', price: 15500, imageUrl: '/assets/images/pococ51.webp' ,description:'', quantity:1,favorite:true} ,
    { id: 10, name: 'REDMI 11 Prime (Playful Green, 64 GB)  (4 GB RAM)', category: 'phone', price: 16000, imageUrl: '/assets/images/11-prime-mzb0cepin-redmi-original-imagzqvrhmzjeedx.webp' ,description:'' , quantity:1,favorite:true},
    { id: 11, name: 'ASUS TUF Gaming A15 Ryzen  ', category: 'laptop', price: 45000, imageUrl: '/assets/images/ASUS TUF Gaming A15 Ryzen.webp'  ,description:'(8 GB/1 TB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) FA506IHRZ-HN112W Gaming Laptop  (15.6 inch, Graphite Black, 2.30 Kg)' ,quantity:1,favorite:false},
    { id: 12, name: 'HP Victus Core i5 12th Gen', category: 'laptop', price: 50000,  imageUrl: '/assets/images/HP Victus Core i5 12th Gen.webp',description:'(8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 15-fa0070TX Gaming Laptop  (15.6 Inch, Performance Blue, 2.37 Kg, With MS Office)',quantity:1,favorite:false },
    { id: 13, name: 'Lenovo IdeaPad Gaming 3 Intel Core i5', category: 'laptop', price: 4499,imageUrl: '/assets/images/lenova ideapad.webp',description:' (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650) 15IHU6 Gaming Laptop  (39.62 cm, Shadow Black, 2.25 kg)',quantity:1,favorite:false },
    { id: 14, name: 'APPLE 2020 Macbook Air M1 ', category: 'laptop', price: 3999,imageUrl: '/assets/images/apple-macbook-air.webp',description:'(8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)',quantity:1,favorite:false },
    { id: 15, name: 'MSI Bravo 15 Ryzen 7 Octa Core 5800H', category: 'laptop', price: 34999,imageUrl: '/assets/images/MSI Bravo 15 Ryzen 7 Octa Core 5800H.webp'  ,description:'(16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/AMD Radeon RX6500M/144 Hz) Bravo 15 B5ED-035IN Gaming Laptop  (15.6 inch, Black, 2.35 Kg)',quantity:0,favorite:false},
    { id: 16, name: 'ASUS Zenbook 14 OLED (2023) ', category: 'laptop', price: 29999, imageUrl: '/assets/images/ASUS Zenbook 14 OLED (2023).webp',description:'(8 GB/512 GB SSD/Windows 11 Home) Modern 14 C7M-063IN Thin and Light Laptop  (14 Inch, Urban Silver, 1.4 Kg)',quantity:1,favorite:false },
    { id: 17, name: 'HP Pavilion Intel Core i5 12th Gen', category: 'laptop', price: 33999,imageUrl: '/assets/images/hp pavilion.webp',description:'(16 GB/512 GB SSD/Windows 11 Home) 14-dv2014TU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 Kg, With MS Office)' ,quantity:1,favorite:false},
    { id: 18, name: 'Lenovo IdeaPad Slim 3 Intel Core i5', category: 'laptop', price: 79999,  imageUrl: '/assets/images/lenovaideapadslim.webp',description:'(16 GB/512 GB SSD/Windows 11 Home) 14-dv2014TU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 Kg, With MS Office)' ,quantity:1,favorite:false},
    { id: 19, name: 'ASUS Chromebook Touch Intel Celeron Dual Core', category: 'laptop', price: 39999, imageUrl: '/assets/images/ASUS Chromebook Touch Intel Celeron Dual Core.webp',description:'(4 GB/64 GB EMMC Storage/Chrome OS) C423NA-BZ0522 Chromebook  (14 inch, Silver, 1.34 Kg)',quantity:1,favorite:false},
    { id: 20, name: 'MSI Ryzen 5 Hexa Core 7530U  ', category: 'laptop', price: 37999,imageUrl: '/assets/images/MSI Ryzen 5 Hexa Core 7530U.webp',description:'(8 GB/512 GB SSD/Windows 11 Home) Modern 10 SS12-5500IN Light Laptop  (14 Inch, Urban Silver, 1.4 Kg)',quantity:1,favorite:false},
    { id: 21, name: 'NIKON D7500 ', category: 'camera', price: 99999, imageUrl: '/assets/images/NIKON D7500.webp',description:'DSLR Camera Body with 18-140 mm Lens  (Black)',quantity:1,favorite:false},
    { id: 22, name: 'Canon EOS 90D', category: 'camera', price: 79999,imageUrl: '/assets/images/Canon EOS 90D.webp' ,description:'DSLR Camera Body with Single Lens 18 - 135 mm IS USM  (Black)',quantity:1,favorite:false},
    { id: 23, name: 'OLYMPUS EM1XINBLK', category: 'camera', price: 34999, imageUrl: '/assets/images/OLYMPUS EM1XINBLK.webp',description:'DSLR Camera Camera  (Black)',quantity:1,favorite:false},
    { id: 24, name: 'Canon EOS 5D Mark IV', category: 'camera', price: 38999, imageUrl: '/assets/images/Canon EOS 5D Mark IV.webp' ,description:' DSLR Camera Body with Single Lens:EF 24-105mm f/4L IS II USM Lens  (Black)',quantity:1,favorite:false},
    { id: 25, name: 'Pentax K-3 Mark III ', category: 'camera', price: 49999, imageUrl: '/assets/images/Pentax K-3 Mark III.webp',description:'DSLR Camera Body Only  (Black)' ,quantity:1,favorite:false},
    { id: 26, name: 'Canon EOS 200D ', category: 'camera', price: 55999, imageUrl: '/assets/images/Canon EOS 200D ].webp'  ,description:'DSLR Camera EF-S18-55mm IS STM  (Black)',quantity:1,favorite:false},
    { id: 27, name: 'OLYMPUS E-M10M4_1442E', category: 'camera', price: 71999, imageUrl: '/assets/images/OLYMPUS E-M10M4_1442E.webp',description:'DSLR Camera Camera  (Black)',quantity:1,favorite:false},
    { id: 28, name: 'Canon EOS 3000D', category: 'camera', price: 99999,  imageUrl: '/assets/images/Canon EOS 3000D.webp',description:'DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)',quantity:1,favorite:false},
    { id: 29, name: 'NIKON ZFC-28MM', category: 'camera', price: 65499,imageUrl: '/assets/images/NIKON ZFC-28MM.webp',description:'DSLR Camera 28MM  (Silver)',quantity:1,favorite:false },
    { id: 30, name: 'TinyTales Kids Digital Camera', category: 'camera', price: 45000, imageUrl: '/assets/images/TinyTales Kids Digital Camera.webp',description:'Web Camera for Computer Child Video Recorder Camera Full HD 1080P Handy Portable Camera 2.0 Screen, with Inbuilt Games for Kids Instant Camera (Bule) (Pack of 2) Point & Shoot Camera  (Blue)',quantity:1,favorite:false},
  ];

  constructor() {}

  getProducts(): any[] {
    return this.products;
  }

  getProductById(productId: number) {
    return this.products.find(product => product.id === productId);
  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }

  searchProducts(query: string): any[] {
    const sanitizedQuery = query.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(sanitizedQuery) ||
      product.description.toLowerCase().includes(sanitizedQuery)
    );
  }
}