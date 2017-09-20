import { Component } from '@angular/core';

@Component({
  selector: 'menu-category',
  templateUrl: 'app/menu_categories/menu.component.html'
})
export class MenuComponent  {
    appname: String = 'Hunger';
    subtitle: String = 'Beat the wait time! Order Online!!';
    menu_soup: String = 'Soups & Salads';
    menu_appetizers: String = 'Appetizers';
    menu_naan: String = 'Breads & Naan';
    menu_main_course: String = 'Main Course';
    menu_desserts: String = 'Desserts';
    menu_beverages: String = 'Beverages';

    showMenu: boolean = false;

    menuDetails(): void {
        this.showMenu = !this.showMenu;
    }
}
