import { Component, Input, OnInit } from '@angular/core';

import { Icart } from '../interfaces/cart_interface';
import { Iproduct } from '../interfaces/product-interface';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  @Input('productItem')product!: Iproduct;

  cart: Icart[] = [];

  constructor(){

  }

  ngOnInit(): void{

  }

  add(): void{
      this.cart = JSON.parse(localStorage.getItem('cart')!);

      if(this.cart.length>0){
        this.cart.forEach(item =>{
        if (item.id === this.product.id){
          item.quantity = item.quantity +1;
        }else{
          this.cart.push({id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1});
        }
      });
    }else{
      this.cart.push({id: this.product.id, name: this.product.name, price: this.product.price, quantity: 1});
    }


    localStorage.setItem('cart', JSON.stringify(this.cart));

  }

}
