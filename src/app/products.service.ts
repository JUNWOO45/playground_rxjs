import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      id: 1, name: 'pencils', price: 1000, reviews: 10, optionalChaining: {name: 'junwoo'}
    },
    {
      id: 2, name: 'eraser', price: 500, reviews: 20, optionalChaining: {name: 'yeoul'}
    },
    {
      id: 3, name: 'pencils', price: 2000, reviews: 100, customFunc() { return true }
    },
    {
      id: 4, name: 'books', price: 3000, reviews: 70
    }
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
}
