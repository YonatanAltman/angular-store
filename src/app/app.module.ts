import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StoreComponent } from './store/store.component';
import { ProductComponent } from './product/product.component';
import { MaterialModule } from '../material/material.module';
import 'hammerjs';
import { AppService } from './app.service';
@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule],
  declarations: [AppComponent,  SideNavComponent, StoreComponent, ProductComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
