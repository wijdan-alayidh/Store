import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { CartComponent } from './cart/cart.component';
import { LayoutModule } from './layout/layout.module';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { FormsModule } from '@angular/forms';
import { CreateOrderComponent } from './create-order/create-order.component';
import { FinishOrderComponent } from './finish-order/finish-order.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent, CreateOrderComponent, FinishOrderComponent],
  imports: [
    CommonModule,
    ProductsModule,
    LayoutModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    RouterModule,
  ],
  exports: [ProductsModule, LayoutModule, NgxBootstrapIconsModule],
})
export class ComponentsModule {}
