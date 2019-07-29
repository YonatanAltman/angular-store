import { Component, OnInit } from '@angular/core';
import { IProduct } from './model/product.model';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = {
    title: 'My Store'
  }
  all = 'all reserve to yonatan@yaltman.com';
  name = 'Angular';
  count: Observable<number>;
  constructor(private app: AppService) { }
  ngOnInit() {

    this.count = this.app.
    myproducts$.pipe(switchMap(products => of(products.length)));
  }
}
