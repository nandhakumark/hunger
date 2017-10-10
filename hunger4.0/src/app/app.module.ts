import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule , Response } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule,Routes,RouterLinkActive } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent }  from './home/home.component';

import { LoginComponent} from './login/login.component';

import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import {LoginserviceService} from './loginservice.service';
import {MatExpansionModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MAT_PLACEHOLDER_GLOBAL_OPTIONS} from '@angular/material';

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
    RouterModule.forRoot(navRoutes),
    MatExpansionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule

    
   
  ],
  providers: [LoginserviceService , {provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'auto'}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
