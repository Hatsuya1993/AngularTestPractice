"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const protractor_1 = require("protractor");
class Cart {
    constructor() {
        this.title = protractor_1.element(protractor_1.by.css("div.container div.brand.greenLogo"));
        this.table = protractor_1.element(protractor_1.by.css("div.products-wrapper div.products table"));
        this.number = protractor_1.element(protractor_1.by.css("thead tr td:nth-child(1) b"));
        this.productName = protractor_1.element(protractor_1.by.css("thead tr td:nth-child(2) b"));
        this.quantity = protractor_1.element(protractor_1.by.css("thead tr td:nth-child(3) b"));
        this.price = protractor_1.element(protractor_1.by.css("thead tr td:nth-child(3) b"));
        this.total = protractor_1.element(protractor_1.by.css("thead tr td:nth-child(3) b"));
        this.productImage = protractor_1.element(protractor_1.by.css("tbody tr td:nth-child(1) img.product-image"));
        this.productNameData = protractor_1.element(protractor_1.by.css("tbody tr td:nth-child(2) p.product-name"));
        this.quantityData = protractor_1.element(protractor_1.by.css("tbody tr td:nth-child(3) p.quantity"));
        this.priceData = protractor_1.element(protractor_1.by.css("tbody tr td:nth-child(4) p.amount"));
        this.totalData = protractor_1.element(protractor_1.by.css("tbody tr td:nth-child(5) p.amount"));
        this.promoCode = protractor_1.element(protractor_1.by.css("div.promoWrapper input[type='text']"));
        this.promoCodeButton = protractor_1.element(protractor_1.by.css("div.promoWrapper button.promoBtn"));
        this.noOfItems = protractor_1.element(protractor_1.by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] b"));
        this.totalAmount = protractor_1.element(protractor_1.by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] br + b"));
        this.discount = protractor_1.element(protractor_1.by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] span + br + b"));
        this.discount = protractor_1.element(protractor_1.by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] span + br + b"));
        this.totalAfterDiscount = protractor_1.element(protractor_1.by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] span.totAmt + br + b"));
        this.placeOrder = protractor_1.element(protractor_1.by.buttonText("Place Order"));
        this.tableItems = protractor_1.element.all(protractor_1.by.css("tbody tr"));
        this.tableItemsNameFirst = protractor_1.element.all(protractor_1.by.css("tbody tr")).get(0).element(protractor_1.by.css("td:nth-child(2)"));
        this.tableItemsTotalFirst = protractor_1.element.all(protractor_1.by.css("tbody tr")).get(0).element(protractor_1.by.css("td:nth-child(5)"));
        this.tableItemsTotalSecond = protractor_1.element.all(protractor_1.by.css("tbody tr")).get(1).element(protractor_1.by.css("td:nth-child(5)"));
        this.tableItemsNameSecond = protractor_1.element.all(protractor_1.by.css("tbody tr")).get(1).element(protractor_1.by.css("td:nth-child(2)"));
        this.totalAmountPrice = protractor_1.element(protractor_1.by.css("span.totAmt"));
    }
}
exports.Cart = Cart;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0NhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWtFO0FBRWxFLE1BQWEsSUFBSTtJQTRCYjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFBO1FBQzNELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtRQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENB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