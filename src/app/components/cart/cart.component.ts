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

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartList = this.cartService.getCartProducts();

    for (let item of this.cartList) {
      this.itemTotal = Number(item.price) * Number(item.orderItems);
      this.total = this.total + this.itemTotal;
    }

    this.total = Number(this.total.toFixed(2));
    this.cartService.total = this.total;
  }
  clearCart(): void {
    this.cartList = [];
    this.cartService.clearCart();
    setTimeout(() => {
      alert('cleared');
    }, 100);
  }

  // Remove Product
  removeItem(product: Product) {
    this.cartList = this.cartList.filter((p) => p.id !== product.id);
    setTimeout(() => {
      alert('Product Removed');
    }, 100);
  }
}
