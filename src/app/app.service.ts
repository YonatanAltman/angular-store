import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from './model/product.model';


@Injectable()
export class AppService {
  private my_products: IProduct[] = []
  private _products: IProduct[] = [
    { id: 1100, name: 'Samsung Galaxy A50', desc: 'good product to use, high price but who care', price: 200 },
    { id: 1100, name: 'Samsung Galaxy S8', desc: 'good product to use, high price but who care', price: 349.99 },
    { id: 1100, name: 'LG G7 ThinQ', desc: 'good product to use, high price but who care', price: 389.99 },
    { id: 1100, name: 'iphone 8 plus', desc: 'good product to use, high price but who care', price: 1000 },
    { id: 1100, name: 'xiaomi pocophone f1   ', desc: 'good product to use, high price but who care', price: 250 },
    { id: 1100, name: 'Nokia 7.1', desc: 'good product to use, high price but who care', price: 329.99 },
  ];
  public products$ = new BehaviorSubject<IProduct[]>(this._products);
  public myproducts$ = new BehaviorSubject<IProduct[]>(this.my_products);
  constructor() { }
  add(p: IProduct) {
    const i = this.my_products.indexOf(p);
    if (i === -1) {

      this.my_products.push(p);
      this.myproducts$.next(this.my_products);
    }
  }
  delete(p: IProduct) {

    this.my_products = this.my_products.filter(prod => prod !== p);
    this.myproducts$.next(this.my_products);
  }
}