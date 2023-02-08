import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { FinishOrderComponent } from './components/finish-order/finish-order.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'order', component: FinishOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
