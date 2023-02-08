import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-order',
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.css'],
})
export class FinishOrderComponent implements OnInit {
  name: string;
  total: number;

  constructor(private route: ActivatedRoute, private location: Location) {
    this.name = '';
    this.total = 0;
  }
  ngOnInit(): void {
    this.name = String(this.route.snapshot.paramMap.get('name'));
  }
}
