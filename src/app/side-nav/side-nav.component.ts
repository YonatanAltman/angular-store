import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/product.model';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public get products(): Observable<IProduct[]> {
    return this.app.myproducts$.asObservable();
  }
  constructor(private app: AppService) { }
  ngOnInit() {
  }
  delete(p: IProduct) {
    this.app.delete(p);
  }
}