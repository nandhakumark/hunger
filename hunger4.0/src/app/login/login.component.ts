import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import {NgForm} from '@angular/forms'
import { RouterModule,Routes,RouterLinkActive,Router } from '@angular/router';
import {md5} from './md5';
import {LoginserviceService} from '../loginservice.service'
import {Model} from '../model'


@Component({
  
  templateUrl:'./login.component.html',
  styleUrls:[  './login.component.css']  
})
export class LoginComponent implements OnInit  {
  
  appname: String = 'Hunger';
  subtitle: String = 'Beat the wait time! Order Online!!';
 
  constructor (public service : LoginserviceService  ){}
    
userName = '';
pwd = '';
model = new Model(this.userName , this.pwd);
ngOnInit() { }

  getdetails()
  {  
     this.service.getlogin(this.model.username , this.model.password);
  }
}