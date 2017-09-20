import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu_categories/menu.component';
import { CartComponent } from './cart_page/cart.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, MenuComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
