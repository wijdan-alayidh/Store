import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  name: string = '';
  address: string = '';
  card: number = 0;
  total: number = 0;

  @Output() createOrder: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, public cartService: CartService) {}
  ngOnInit(): void {}

  submitForm(): void {
    const order = {
      name: this.name,
      address: this.address,
      card: this.card,
      total: this.total,
    };

    this.createOrder.emit(order);
    this.router.navigate(['/order', order]);
    this.cartService.clearCart();
  }
}
