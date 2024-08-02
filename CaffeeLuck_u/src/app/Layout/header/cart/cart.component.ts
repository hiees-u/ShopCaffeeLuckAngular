import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartMini = {
    quantity: 0,
    Subtotal: 0
  };

  listProductCart = [
    {
      "Image": 'product-1.png',
      "Name": 'COFFEE WITH CREAM GOLD COLLECTION',
      "Quantity": 1,
      "Price":38
    },
    {
      "Image": 'product-2.png',
      "Name": 'GLASS COFFEE JAR WITH WOOD COLLAR',
      "Quantity": 1,
      "Price": 35
    }
  ];

  @Output() ShowPageCart = new EventEmitter<string>();

  ngOnInit(): void {
    //tính tổng tiền và số lượng sản phẩm đang có trong cart
    this.cartMini = this.listProductCart.reduce((accumulator, product) => {
      accumulator.quantity += product.Quantity;
      accumulator.Subtotal += product.Quantity * product.Price;
      return accumulator;
    }, { quantity: 0, Subtotal: 0 });
  }

  showCart:boolean = false;

  @Input() typeShow = 1;
  
  IsShowCart() {
    this.showCart = !this.showCart;    
  }

  isShowPageCart() {
    if(this.typeShow == 0)
      this.showCart = !this.showCart;
    this.ShowPageCart.emit('CART');
  }

}
