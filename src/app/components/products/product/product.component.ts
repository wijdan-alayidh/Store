import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() hideProduct: EventEmitter<Product> = new EventEmitter();
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  @Output() showProduct: EventEmitter<Product> = new EventEmitter();

  totalItems = 0;

  constructor() {
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
  ngOnInit(): void {}
  // add items
  upQuantity(product: Product): void {
    if (this.product.quantity != 0) {
      const maxQuantity = this.product.quantity;
      if (maxQuantity != 0 && this.totalItems < maxQuantity) {
        this.totalItems++;
        this.product.orderItems++;
      } else {
        this.totalItems;
        this.product.orderItems;
      }
    }
  }
  // remove items
  downQuantity(product: Product): void {
    if (this.product.quantity != 0) {
      const maxQuantity = this.product.quantity;
      if (maxQuantity != 0 && this.totalItems > 0) {
        this.totalItems--;
        this.product.orderItems--;
      } else {
        this.totalItems;
        this.product.orderItems;
      }
    }
  }
  // Check product availability
  productAvailable(): boolean {
    if (this.product.quantity > 0) {
      return true;
    } else {
      return false;
    }
  }
  // Max Items to order
  maxItems(): boolean {
    if (this.totalItems === this.product.quantity) {
      return false;
    } else {
      return true;
    }
  }

  // hide
  hide(product: Product): void {
    this.hideProduct.emit(product);
  }
  // add Product
  add(product: Product): void {
    if (product.orderItems == 0) {
      alert('Please select the number of items.');
    } else {
      this.addToCart.emit(product);
    }
  }
}
