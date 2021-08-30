"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
const protractor_1 = require("protractor");
class Offer {
    constructor() {
        this.website = protractor_1.browser.get("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        this.getURL = protractor_1.browser.getCurrentUrl();
        this.topDeals = protractor_1.element(protractor_1.by.css("div.container div.cart a.cart-header-navlink"));
    }
}
exports.Offer = Offer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9wRGVhbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Ub3BEZWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBZ0U7QUFFaEUsTUFBYSxLQUFLO0lBTWQ7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUE7UUFDdEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQTtJQUVuRixDQUFDO0NBRUo7QUFkRCxzQkFjQyJ9