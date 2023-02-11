import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Validator, Form } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent implements OnInit {
  name: string = '';
  address: string = '';
  card: number;
  total: number = 0;
  max: number;
  min: number;
  errorMessage: string;

  inputName: string;

  @Output() createOrder: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, public cartService: CartService) {}
  ngOnInit(): void {}
  validateNumberOfInputs(min: number, max: number): void {
    if (this.name.length < min) {
      this.errorMessage = `The minimum number of characters must be ${min}`;
    } else if (this.name.length > max) {
      this.errorMessage = `The maximum number of characters must be ${max}`;
    } else {
      this.errorMessage = '';
    }
  }
  submitForm(): void {
    const order = {
      name: this.name,
      address: this.address,
      card: this.card,
      total: this.total,
    };

    this.createOrder.emit(order);
    this.router.navigate(['/order', order]);

    this.name = '';
    this.address = '';
    this.card = 0;

    this.cartService.clearCart();
  }
}
