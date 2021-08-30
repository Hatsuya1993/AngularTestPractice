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
const protractor_1 = require("protractor");
const OfferPage_1 = require("../pageObjects/OfferPage");
var chai = require("chai");
var expect = chai.expect;
describe('Testing offer page', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let offerPage = new OfferPage_1.OfferPage();
        yield offerPage.website;
    }));
    it('After the link is checked, check if the elements exist specific to this view', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let offerPage = new OfferPage_1.OfferPage();
        yield offerPage.title.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.pageSize.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.pageDropDown.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.paginationNumber.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.search.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.searchInput.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.columnOne.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.columnTwo.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.columnThree.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
        yield offerPage.noOfRows.isDisplayed().then(data => {
            expect(data).to.be.true;
        });
    }));
    it('Testing the search functionality', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let offerPage = new OfferPage_1.OfferPage();
        yield offerPage.searchInput.sendKeys("tomato");
        yield offerPage.noOfRowsEachFirst.getText().then(data => {
            expect(data).to.equal("Tomato");
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2ZmZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvT2ZmZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1FO0FBQ25FLHdEQUFvRDtBQUNwRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUV4QixRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBRWhDLFVBQVUsQ0FBQyxHQUFRLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFBO1FBQy9CLE1BQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQTtJQUMzQixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDhFQUE4RSxFQUFFLEdBQVMsRUFBRTtRQUMxRixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7UUFDL0IsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQTtRQUMzQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sU0FBUyxD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