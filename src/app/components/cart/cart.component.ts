import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];

  total: number = 0;
  itemTotal: number = 0;
  item: Number;

  constructor(private cartService: CartService) {
    this.cartList = [];
  }
  ngOnInit(): void {
    this.getCarListItems();
  }

  getCarListItems(): Product[] {
    this.cartList = this.cartService.getCartProducts();

    for (let item of this.cartList) {
      this.itemTotal = Number(item.price) * Number(item.orderItems);
      this.total = this.total + this.itemTotal;
    }

    this.total = Number(this.total.toFixed(2));
    this.cartService.total = this.total;

    return this.cartList;
  }

  clearCart(): void {
    this.cartList = [];
    this.cartService.clearCart();
    setTimeout(() => {
      alert('cleared');
    }, 100);
  }

  // Remove Product
  removeItem(product: Product): Product[] {
    this.total = Number(
      (this.total - product.orderItems * product.price).toFixed(2)
    );

    this.item = this.cartList.indexOf(product);
    console.log(this.item);
    this.cartList = this.cartList.splice(Number(this.item), 1);

    setTimeout(() => {
      alert('Product Removed');
    }, 100);

    return this.cartList;
  }
}
