"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.appname = 'Hunger';
        this.subtitle = 'Beat the wait time! Order Online!!';
        this.imagePath = 'http://i.ndtvimg.com/i/2016-06/biryani-625_625x350_41467197200.jpg';
        this.dessertImage = 'http://del.h-cdn.co/assets/17/28/480x240/landscape-1499799606-delish-cookie-dough-lasagna-still001.jpg';
        this.dosaImage = 'http://www.bhatkallys.com/wp-content/uploads/2016/12/22796096d9c63708fb5bdddd27fa10fe-620x330.jpg';
        this.appetizerImage = 'https://s3-media2.fl.yelpcdn.com/bphoto/dW4X6anncIG5IpiU16eU1w/o.jpg';
        this.menu_soup = 'Soups & Salads';
        this.menu_appetizers = 'Appetizers';
        this.menu_naan = 'Breads & Naan';
        this.menu_main_course = 'Main Course';
        this.menu_desserts = 'Desserts';
        this.menu_beverages = 'Beverages';
        this.showMenu = false;
        this.showLogin = false;
    }
    AppComponent.prototype.menuDetails = function () {
        this.showLogin = false;
        this.showMenu = !this.showMenu;
    };
    AppComponent.prototype.loginDetails = function () {
        this.showMenu = false;
        this.showLogin = !this.showLogin;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map