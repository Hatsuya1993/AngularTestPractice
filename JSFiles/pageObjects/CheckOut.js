"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOut = void 0;
const protractor_1 = require("protractor");
class CheckOut {
    constructor() {
        this.website = protractor_1.browser.get('https://qaclickacademy.github.io/protocommerce/shop');
        this.allItemsChecked = protractor_1.element.all(protractor_1.by.css('tbody tr'));
        this.ItemQuantity = protractor_1.element.all(protractor_1.by.id('exampleInputEmail1'));
        this.ItemCardFirst = protractor_1.element(protractor_1.by.css('tbody tr:nth-child(1)'));
        this.ItemCardSecond = protractor_1.element(protractor_1.by.css('tbody tr:nth-child(2)'));
        this.totalPriceOneItem = protractor_1.element(protractor_1.by.css('tbody tr:nth-child(2) td:nth-child(5) h3 strong'));
        this.totalPriceTwoItem = protractor_1.element(protractor_1.by.css('tbody tr:nth-child(3) td:nth-child(5) h3 strong'));
    }
}
exports.CheckOut = CheckOut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tPdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9DaGVja091dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyQ0FBOEQ7QUFFOUQsTUFBYSxRQUFRO0lBVWpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQTtRQUMzRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQTtJQUMvRixDQUFDO0NBQ0o7QUFuQkQsNEJBbUJDIn0=