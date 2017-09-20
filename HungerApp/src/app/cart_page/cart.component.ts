import { Component } from '@angular/core';

@Component({
  selector: 'my-cart',
  templateUrl: 'app/cart_page/cart.component.html'
})
export class CartComponent  {
    itemone: String = 'Veg Samosa';
    quantityone: number = 3;
    priceone: number = 11.97;

    itemtwo: String = 'Masala Tea';
    quantitytwo: number = 3;
    pricetwo: number = 7.47;
}
