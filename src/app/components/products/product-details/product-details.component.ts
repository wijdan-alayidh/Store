import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  product_id: string;
  products: Product[] = [];

  totalItems = 0;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) {
    this.product_id = this.route.snapshot.params['id'];
    this.product = this.route.snapshot.params['product'];
  }

  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
  goBack(): void {
    this.location.back();
  }

  upQuantity(product: Product): void {
    if (this.product.quantity != 0) {
      const maxQuantity = this.product.quantity;
      if (maxQuantity != 0 && this.totalItems < maxQuantity) {
        this.totalItems++;
      } else {
        this.totalItems;
      }
    }
  }
  // remove items
  downQuantity(product: Product): void {
    if (this.product.quantity != 0) {
      const maxQuantity = this.product.quantity;
      if (maxQuantity != 0 && this.totalItems > 0) {
        this.totalItems--;
      } else {
        this.totalItems;
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
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
