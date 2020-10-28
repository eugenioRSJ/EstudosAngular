import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product.model';
import { CartUtil } from 'src/app/utils/cart.util';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  //especifica que vamos receber dados nessa variavel por referencia
  //na tela devemos referencia [product] = algo
  @Input() product: Product;
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addToCart(){
    CartUtil.add(
      this.product._id,
      this.product.title,
      1,
      this.product.price,
      this.product.images
    )
    this.toastr.success(`${this.product.title} adicionado ao carrinho`, 'Produto adicionado');
  }
}
