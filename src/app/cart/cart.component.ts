import { Component, OnInit } from '@angular/core';
import { Icart } from '../interfaces/cart_interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cart!: Icart[];

  constructor(){

  }

  ngOnInit(): void {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
  }

}
