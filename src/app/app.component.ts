import { Component, OnInit } from '@angular/core';
import { Iproduct } from './interfaces/product-interface';
import { Icart } from './interfaces/cart_interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  title = 'shopping-cart';
  products: Iproduct[] = [];
  cart: Icart[] =[];
  show: boolean;

  constructor(){

    if(!localStorage.getItem('cart')){
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }


    this.show = false;


  }

  ngOnInit() {

    this.products = [
    {
      id: 1,
      name:"Macbook Pro de 13's",
      description:"CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia GPU de 10 núcleos Neural Engine de 16 núcleos 100 GB/s de ancho de banda de memoria",
      price:800,
      img:"../assets/mac.png",
      quantity:2,
  },
  {
    id: 2,
    name:"Macbook Pro de 14's",
    description:"CPU de 16 núcleos con 8 núcleos de rendimiento y 8 de eficiencia GPU de 10 núcleos Neural Engine de 32 núcleos 200 GB/s de ancho de banda de memoria",
    price:1200,
    img:"../assets/mac.png",
    quantity:3,
  },
  {
    id: 3,
    name:"Laptop Gamer Asus Tuf",
    description:"Delgada y ligera(FX504) 15.6 pulgadas Intel Core i5 GeForce GTX 1050 2gb, 8gb DDR4 1tb FireCuda SSHD, Windows 10 64 bits - FX504GD-ES51",
    price:2000,
    img:"../assets/laptopAsus.png",
    quantity:1,
  },
  {
    id: 4,
    name:"Asus FX505DT-EB73",
    description:"Laptop Gamer Asus FX505DT-EB73 (AMD Ryzen 7, 39.6 cm 15.6 pulgadas, 1920 x 1080 Pixeles, 8 GB, 512 GB, Windows 10)",
    price:1000,
    img:"../assets/laptopAsus.png",
    quantity:1,
  },
  {
    id: 5,
    name:"Macbook Pro de 12's",
    description:"CPU de 8 núcleos con 4 núcleos de rendimiento y 4 de eficiencia GPU de 8 núcleos Neural Engine de 16 núcleos 100 GB/s de ancho de banda de memoria",
    price:800,
    img:"../assets/mac.png",
    quantity:1,
  },];

  }

  toogleCart(){
    this.show=!this.show;
  }
}
