import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  //Observable transforma o objeto em assincrono
  //$ convenção para dizer que o objeto é assincrono
  public products$: Observable<Product[]>;
  //Componente trava até carregar esse parada
  constructor(private data : DataService) {

  }

  //O componente Já foi construido
  ngOnInit(): void {
      this.products$ = this.data.getProducts();
  }

}
