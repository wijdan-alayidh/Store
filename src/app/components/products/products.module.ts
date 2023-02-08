import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ProductsListComponent, ProductComponent, ProductDetailsComponent],
})
export class ProductsModule {}
