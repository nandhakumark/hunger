import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes,RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent }  from 'app/Home/home.component';

import { LoginComponent} from 'app/Login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';



const navRoutes : Routes  = [
  { path : 'home' , component :HomeComponent},
  { path : 'menu' , component :MenuComponent},
  { path : 'signup' , component :SignupComponent},
  { path : 'login' , component :LoginComponent},
  {path : '' , redirectTo : '/home' ,pathMatch : 'full'}
  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    SignupComponent
    

   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(navRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
