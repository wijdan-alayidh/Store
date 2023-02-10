import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  // Defind component variables needed

  products: Product[] = [];

  constructor(
    private productService: ProductsService,
    private cartService: CartService
  ) {}
  ngOnInit() {
    return this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
  hideProduct(product: Product): void {
    this.products = this.products.filter((p) => p.id !== product.id);
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
