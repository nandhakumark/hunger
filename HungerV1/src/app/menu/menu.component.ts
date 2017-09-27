import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menu_soup: String = 'Soups & Salads';
  menu_appetizers: String = 'Appetizers';
  menu_naan: String = 'Breads & Naan';
  menu_main_course: String = 'Main Course';
  menu_desserts: String = 'Desserts';
  menu_beverages: String = 'Beverages';

}
