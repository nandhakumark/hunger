"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MenuComponent = (function () {
    function MenuComponent() {
        this.appname = 'Hunger';
        this.subtitle = 'Beat the wait time! Order Online!!';
        this.menu_soup = 'Soups & Salads';
        this.menu_appetizers = 'Appetizers';
        this.menu_naan = 'Breads & Naan';
        this.menu_main_course = 'Main Course';
        this.menu_desserts = 'Desserts';
        this.menu_beverages = 'Beverages';
        this.showMenu = false;
    }
    MenuComponent.prototype.menuDetails = function () {
        this.showMenu = !this.showMenu;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: 'menu-category',
        templateUrl: 'app/menu_categories/menu.component.html'
    })
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map