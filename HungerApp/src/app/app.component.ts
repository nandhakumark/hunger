import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
    appname: String = 'Hunger';
    subtitle: String = 'Beat the wait time! Order Online!!';
    imagePath: String = 'http://i.ndtvimg.com/i/2016-06/biryani-625_625x350_41467197200.jpg';
    dessertImage: String = 'http://del.h-cdn.co/assets/17/28/480x240/landscape-1499799606-delish-cookie-dough-lasagna-still001.jpg';
    dosaImage: String = 'http://www.bhatkallys.com/wp-content/uploads/2016/12/22796096d9c63708fb5bdddd27fa10fe-620x330.jpg';
    appetizerImage: String = 'https://s3-media2.fl.yelpcdn.com/bphoto/dW4X6anncIG5IpiU16eU1w/o.jpg';
    
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
