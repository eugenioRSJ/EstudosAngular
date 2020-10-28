import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    public url = 'http://localhost:7189/v1';
    constructor(
        private http: HttpClient
    ) { }

    getProducts(){
        return this.http.get<ProductModel[]>(`${this.url}/products`);
    }
}

