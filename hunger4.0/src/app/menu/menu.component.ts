import { Component, OnInit } from '@angular/core';
import { Http , Response } from '@angular/http';
import { RouterModule,Routes,RouterLinkActive,Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  selectedValue: string;
  
    foods = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
  menu_soup: String = 'Soups & Salads';
  menu_appetizers: String = 'Appetizers';
  menu_naan: String = 'Breads & Naan';
  menu_main_course: String = 'Main Course';
  menu_desserts: String = 'Desserts';
  menu_beverages: String = 'Beverages';

  responseValue = '';
  public item_details=[];
  
  

  constructor (private _http : Http , private router : Router ){}
  
  getdetails(menuItem: string)
  {
    this._http.get("http://localhost:8080/hunger/"+menuItem)
    .subscribe(
      (res:Response) => {
        const resp  = res.json();
        this.responseValue = resp.responseCode;
        this.item_details=resp.Items;
        
                
  })
 
}
}

