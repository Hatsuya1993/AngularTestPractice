"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferPage = void 0;
const protractor_1 = require("protractor");
class OfferPage {
    constructor() {
        this.website = protractor_1.browser.get("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        this.getURL = protractor_1.browser.getCurrentUrl();
        this.topDeals = protractor_1.element(protractor_1.by.css("header[style='margin-left: -121px;'] div[class='container'] div[class='cart'] a:nth-child(2)"));
        this.title = protractor_1.element(protractor_1.by.css("div.container div.brand.greenLogo div.brand.greenLogo"));
        this.pageSize = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div label"));
        this.pageDropDown = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div select"));
        this.paginationNumber = protractor_1.element(protractor_1.by.css("div.row div.col-xs-8 ul.pagination.pull-right"));
        this.search = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div label[for='page-menu']"));
        this.searchInput = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div input[type='search']"));
        this.columnOne = protractor_1.element(protractor_1.by.css("thead tr th:nth-child(1)"));
        this.columnTwo = protractor_1.element(protractor_1.by.css("thead tr th:nth-child(2)"));
        this.columnThree = protractor_1.element(protractor_1.by.css("thead tr th:nth-child(3)"));
        this.noOfRows = protractor_1.element(protractor_1.by.css("tbody"));
        this.noOfRowsEachFirst = protractor_1.element(protractor_1.by.css("tbody tr:nth-child(1) td:nth-child(1)"));
    }
}
exports.OfferPage = OfferPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2ZmZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvT2ZmZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFnRTtBQUVoRSxNQUFhLFNBQVM7SUFpQmxCO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwREFBMEQsQ0FBQyxDQUFBO1FBQ3RGLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4RkFBOEYsQ0FBQyxDQUFDLENBQUE7UUFDL0gsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFBO1FBQ3JGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQyxDQUFBO1FBQ2hGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBO0lBRXJGLENBQUM7Q0FFSjtBQXBDRCw4QkFvQ0MifQ==