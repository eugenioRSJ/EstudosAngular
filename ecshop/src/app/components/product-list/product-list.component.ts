import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Add } from 'src/app/actions/cart.action';
import { DataService } from 'src/app/data/data.service';
import { CartModel } from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products: any[] = null;
  constructor(
    private store: Store<{cart: CartModel}>,
    private toastCtrl: ToastController,
    private service: DataService
  ) { }

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe((data) => {
        this.products = data;
      })
  }

  async Add(product){
    this.store.dispatch(Add(product)); //como chamar isso aqui chama 
    const toast = await this.toastCtrl.create({
      message: `${product.title} adicionando com sucesso`,
      duration: 3000
    })
    toast.present();
  }

}
