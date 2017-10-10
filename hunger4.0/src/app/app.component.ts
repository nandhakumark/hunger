import { Component } from '@angular/core';
import {LoginComponent} from  './login/login.component'
import {LoginserviceService} from './loginservice.service'
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
  
  
  
  
})
export class AppComponent 
{
  appname: String = 'Hunger';
  subtitle: String = 'Beat the wait time! Order Online!!';

  constructor( public service: LoginserviceService ){

  }
}
