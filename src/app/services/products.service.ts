import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: Product;
  products: Product[] = [];

  private URL = './assets/data.json';

  constructor(private http: HttpClient) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 0,
      orderItems: 0,
    };
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }
}
