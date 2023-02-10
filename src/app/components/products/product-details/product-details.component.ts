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
  product_id: Number;
  products: Product[] = [];

  totalItems = 0;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private location: Location,
    private cartService: CartService
  ) {
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.product_id = Number(params.get('id'));
    });
    if (this.product_id) {
      this.productService.getProducts().subscribe((res) => {
        this.products = res;
        this.product = this.getProductDetail(this.product_id);
      });
    }
  }

  getProductDetail(id: Number) {
    return this.products.filter((p) => p.id === id)[0];
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
