"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shop_1 = require("../pageObjects/Shop");
const CheckOut_1 = require("../pageObjects/CheckOut");
const protractor_1 = require("protractor");
var chai = require('chai');
var expect = chai.expect;
describe('pageObjects1 for forms test', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let shop = new Shop_1.Shop();
        yield shop.website;
    }));
    it('When browser loads the webpage, check the initial data', () => __awaiter(void 0, void 0, void 0, function* () {
        let shop = new Shop_1.Shop();
        yield shop.titleName.getText().then(data => {
            expect(data).to.equal('ProtoCommerce Home');
        });
        yield shop.allCards.count().then(data => {
            expect(data).to.equal(4);
        });
        yield shop.checkoutButton.getText().then(data => {
            expect(data).to.equal('Checkout ( 0 )\n(current)');
        });
        yield shop.allCards.each(data => {
            data.element(protractor_1.by.css('h4[class="card-title"]')).getText().then(data => {
                console.log(data);
            });
        });
        yield shop.allCards.each(data => {
            data.element(protractor_1.by.css('h5')).getText().then(data => {
                console.log(data);
            });
        });
    }));
    it('When first option submit button is clicked, checkout should change to 1', () => __awaiter(void 0, void 0, void 0, function* () {
        let shop = new Shop_1.Shop();
        yield shop.allCards.get(0).element(protractor_1.by.css('button[class="btn btn-info"]')).click();
        yield shop.checkoutButton.getText().then(data => {
            expect(data).to.equal('Checkout ( 1 )\n(current)');
        });
    }));
    it('When the checkout button is clicked, will be redirected to the checkout page', () => __awaiter(void 0, void 0, void 0, function* () {
        let shop = new Shop_1.Shop();
        yield shop.checkoutButton.click();
        protractor_1.browser.getCurrentUrl().then(data => {
            expect(data).to.equal('https://qaclickacademy.github.io/protocommerce/shop');
        });
    }));
    it('When an item is added to the checkout item, the item should be displayed on the checkout page', () => __awaiter(void 0, void 0, void 0, function* () {
        let shop = new Shop_1.Shop();
        let checkOut = new CheckOut_1.CheckOut();
        yield shop.allCards.get(0).element(protractor_1.by.css('button[class="btn btn-info"]')).click();
        yield shop.checkoutButton.click();
        yield checkOut.allItemsChecked.count().then(data => {
            expect(data - 2).to.equal(1);
        });
        yield protractor_1.element.all(protractor_1.by.css('h4[class="media-heading"] a')).get(0).getText().then(data => {
            expect(data).to.equal('iphone X');
        });
        yield checkOut.ItemQuantity.get(0).getAttribute('value').then(data => {
            expect(parseInt(data)).to.equal(1);
        });
        yield checkOut.ItemCardFirst.element(protractor_1.by.css('td:nth-child(4) strong')).getText().then(data1 => {
            checkOut.ItemQuantity.get(0).getAttribute('value').then(data => {
                expect(parseInt(data) * parseInt(data1.split(" ")[1])).to.equal(100000);
            });
        });
        yield checkOut.totalPriceOneItem.getText().then(data => {
            checkOut.ItemCardFirst.element(protractor_1.by.css('td:nth-child(4) strong')).getText().then(data1 => {
                expect(parseInt(data.split(" ")[1])).to.equal(parseInt(data1.split(" ")[1]));
            });
        });
    }));
    it('Similar to the top test case but with another item added', () => __awaiter(void 0, void 0, void 0, function* () {
        let shop = new Shop_1.Shop();
        let checkOut = new CheckOut_1.CheckOut();
        yield shop.allCards.get(0).element(protractor_1.by.css('button[class="btn btn-info"]')).click();
        yield shop.allCards.get(1).element(protractor_1.by.css('button[class="btn btn-info"]')).click();
        yield shop.checkoutButton.click();
        yield checkOut.allItemsChecked.count().then(data => {
            expect(data - 2).to.equal(2);
        });
        yield checkOut.ItemCardFirst.element(protractor_1.by.css('td:nth-child(1) h4[class="media-heading"] a')).getText().then(data => {
            expect(data).to.equal('iphone X');
        });
        yield checkOut.ItemCardSecond.element(protractor_1.by.css('td:nth-child(1) h4[class="media-heading"] a')).getText().then(data => {
            expect(data).to.equal('Samsung Note 8');
        });
        yield checkOut.ItemQuantity.get(0).getAttribute('value').then(data => {
            expect(parseInt(data)).to.equal(1);
        });
        yield checkOut.ItemQuantity.get(1).getAttribute('value').then(data => {
            expect(parseInt(data)).to.equal(1);
        });
        yield checkOut.ItemCardFirst.element(protractor_1.by.css('td:nth-child(3) strong')).getText().then(price1 => {
            checkOut.ItemCardSecond.element(protractor_1.by.css('td:nth-child(3) strong')).getText().then(price2 => {
                checkOut.totalPriceTwoItem.getText().then(total => {
                    expect(parseInt(price1.split(" ")[1]) + parseInt(price2.split(" ")[1])).to.equal(parseInt(total.split(" ")[1]));
                });
            });
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL1Nob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBd0M7QUFDeEMsc0RBQWdEO0FBRWhELDJDQUE4RDtBQUM5RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBRXpDLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdEIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxHQUFTLEVBQUU7UUFDcEUsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQTtRQUNyQixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMs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