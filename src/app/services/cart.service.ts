import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: Product[] = [];
  public total: number = 0;

  constructor() {}

  // Get the Products added to the cart function
  getCartProducts() {
    return this.cartList;
  }
  // Add Products to Cart function
  addToCart(product: Product) {
    let checkProductAdded = this.cartList
      .map(({ id }) => id)
      .includes(product.id);

    if (!checkProductAdded) {
      if (product.orderItems == 0) {
        product.orderItems = 1;
        this.cartList.push(product);
      } else {
        this.cartList.push(product);
      }
      alert('added');
    } else {
      product.orderItems++;
      alert('This Product added before');
    }
    return this.cartList;
  }
  // Clear cart
  clearCart() {
    this.cartList = [];
    return this.cartList;
  }
}
