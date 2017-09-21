import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu_categories/menu.component';
import { CartComponent } from './cart_page/cart.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule ],
  declarations: [AppComponent,
      MenuComponent,
      CartComponent,
      LoginComponent],
  bootstrap: [AppComponent,
      LoginComponent]
})
export class AppModule { }
