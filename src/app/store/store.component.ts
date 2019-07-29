import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product.model';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public get products(): Observable<IProduct[]> {
    return this.app.products$.asObservable();
  }

  constructor(private app: AppService) { }

  ngOnInit() {
  }
  buy(p: IProduct) {
    console.log(p);
    this.app.add(p);
  }
}