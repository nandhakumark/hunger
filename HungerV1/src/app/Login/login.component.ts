import { Component ,OnInit } from '@angular/core';
import {Ilogin} from  'app/Login/login';
import { LoginService} from 'app/Login/login.service'

@Component({
  
  templateUrl: './login.component.html',
  styleUrls:[   './login.component.css'],
  providers : [LoginService]
 
  
})
export class LoginComponent  {
  
  appname: String = 'Hunger';
  subtitle: String = 'Beat the wait time! Order Online!!';

  
  
}

