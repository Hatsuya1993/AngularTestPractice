"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const protractor_1 = require("protractor");
class Shop {
    constructor() {
        this.website = protractor_1.browser.get('https://qaclickacademy.github.io/protocommerce/shop');
        this.titleName = protractor_1.element(protractor_1.by.cssContainingText('div[class="container"] a[class="navbar-brand"]', 'ProtoCommerce Home'));
        this.allCards = protractor_1.element.all(protractor_1.by.css('app-card-list[class="row"] app-card'));
        this.checkoutButton = protractor_1.element(protractor_1.by.css('a[class="nav-link btn btn-primary"]'));
    }
}
exports.Shop = Shop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1Nob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThEO0FBRTlELE1BQWEsSUFBSTtJQU9iO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsZ0RBQWdELEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQ3RILElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUE7UUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hGLENBQUM7Q0FDSjtBQWJELG9CQWFDIn0=