import { Injectable} from '@angular/core';
import { Http,Response} from '@angular/http';
import { LoginComponent } from 'app/Login/login.component'
import { Ilogin} from 'app/Login/login'
import { Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private _http :Http) {

    }


    getLogin() : Observable<Ilogin[]> 
        
        {
           return this._http.get("http://demo8037313.mockable.io/")
                            .map((response :Response ) => <Ilogin[]>response.json());
        }
    
}

