"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
const protractor_1 = require("protractor");
class Offer {
    constructor() {
        this.website = protractor_1.browser.get("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        // this.website = browser.get("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        this.getURL = protractor_1.browser.getCurrentUrl();
        this.topDeals = protractor_1.element(protractor_1.by.css("header[style='margin-left: -121px;'] div[class='container'] div[class='cart'] a:nth-child(2)"));
        this.title = protractor_1.element(protractor_1.by.css("div.container div.brand.greenLogo div.brand.greenLogo"));
        this.pageSize = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div label"));
        this.pageDropDown = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div select"));
        this.paginationNumber = protractor_1.element(protractor_1.by.css("div.row div.col-xs-8 ul.pagination.pull-right"));
        this.search = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div lable[for='search-field']"));
        this.searchInput = protractor_1.element(protractor_1.by.css("div.row div.col-xs-4 div input[type='search']"));
        this.columnOne = protractor_1.element(protractor_1.by.css("thead tr th:nth-child(1)"));
        this.columnTwo = protractor_1.element(protractor_1.by.css("thead tr th:nth-child(2)"));
        this.columnThree = protractor_1.element(protractor_1.by.css("thead tr th:nth-child(3)"));
        this.noOfRows = protractor_1.element(protractor_1.by.css("tbody"));
        this.noOfRowsEachFirst = protractor_1.element(protractor_1.by.css("tbody tr:nth-child(1) td:nth-child(1)"));
    }
}
exports.Offer = Offer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2ZmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9PZmZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBZ0U7QUFFaEUsTUFBYSxLQUFLO0lBaUJkO1FBZkEsWUFBTyxHQUFRLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBEQUEwRCxDQUFDLENBQUE7UUFpQmxGLHlGQUF5RjtRQUN6RixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsOEZBQThGLENBQUMsQ0FBQyxDQUFBO1FBQy9ILElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxDQUFDLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQyxDQUFBO1FBQ3hGLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUE7UUFDbkYsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQTtRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQTtJQUVyRixDQUFDO0NBRUo7QUFwQ0Qsc0JBb0NDIn0=