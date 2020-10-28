import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent implements OnInit {
  public cart: Cart = new Cart();
  constructor() { }

  ngOnInit(){
    this.loadCard()
  }

  //Função computada são funções que fazem calculo e posso exibir na tela e retornar automaticamente
  public total(){
    let total = 0;
    this.cart.items.forEach((item) =>{
      total += (item.price * item.quantity);
    })
    return total;
  }

  public loadCard(){
    this.cart = CartUtil.get()
  }

  public remove(item){
    let index = this.cart.items.indexOf(item);
    this.cart.items.splice(index, 1);
    CartUtil.update(this.cart);
  }

  public clear(){
    CartUtil.clear();
    this.loadCard();
  }
}
