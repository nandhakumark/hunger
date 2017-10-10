import { Injectable } from '@angular/core';
import { RouterModule,Routes,RouterLinkActive,Router } from '@angular/router';
import {md5} from 'app/Login/md5';
import { Http , Response } from '@angular/http';
import {LoginComponent} from 'app/Login/login.component'




@Injectable()
export class LoginserviceService {

  pwd1 = '';
  public loggeduser : string;
  public invaliduser : string;
  responseCd ='';
  responsemsg = ''
  public userloggedin : boolean ;
  showerror : boolean;
  constructor(private _http:Http , private router :Router ) {   }


  getlogout()
  {
    this.userloggedin =false;
    
  }

  getlogin(userid: string, pcd: string)
   {
      
    let e = md5(pcd);
       console.log(e);
       
       this._http.get("http://localhost:8080/hunger/login/userName="+userid+"&&pwd="+e)
       .subscribe(
         (res:Response) => {
         
           const uName  = res.json();
 
           this.responseCd = uName[0].responseCode;
           this.responsemsg = uName[0].responseMessage;
            console.log(uName);
            console.log(this.responseCd);
           if (this.responseCd === '200' )
           {
            this.loggeduser=userid;
            this.userloggedin= true;
            console.log(this.loggeduser);
             this.router.navigateByUrl ('/menu');
            
           }

           else if  (this.responseCd === '400' )
           {
             this.invaliduser = "Username and Password does not match . Please try again with correct details"
             this.showerror = true;

            }

         
         })
         
         
 
     
  }

}
