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
const HomePage_1 = require("../pageObjects/HomePage");
var chai = require('chai');
var expect = chai.expect;
describe('pageObjects1 for forms test', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new HomePage_1.HomePage();
        yield homePage.website;
    }));
    it('Test the form is submitted successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new HomePage_1.HomePage();
        yield homePage.name.sendKeys('Hazrul');
        yield homePage.email.sendKeys('Hazrul@123.com');
        yield homePage.password.sendKeys('password');
        yield homePage.gender.click();
        yield homePage.submitButton.click();
        homePage.popUp.getText().then(data => {
            expect(data).to.equal('Success!');
        });
    }));
    it('Test the form if home button is clicked redirect to the same home page', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new HomePage_1.HomePage();
        homePage.homeButton.click();
        homePage.jumbotronTitle.getText().then(data => {
            expect(data).to.equal('Protractor Tutorial');
        });
    }));
    it('Test the form if Shop button is clicked is redirected to the shop page', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new HomePage_1.HomePage();
        homePage.shopButton.click();
        homePage.shopHomeTitle.getText().then(data => {
            expect(data).to.equal('ProtoCommerce Home');
        });
    }));
    it('When data is typed in two-way data binding exmaple, output will be displayed in name', () => __awaiter(void 0, void 0, void 0, function* () {
        let homePage = new HomePage_1.HomePage();
        homePage.twoWayDataBindingExample.sendKeys('There is data here').then(() => {
            homePage.name.getAttribute('value').then(data => {
                expect(data).to.equal('There is data here');
            });
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNEQUFnRDtBQUNoRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixRQUFRLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO0lBRXpDLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsTUFBTSxRQUFRLENBQUMsT0FBTyxDQUFBO0lBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBUyxFQUFFO1FBQ3JELElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEMsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQy9DLE1BQU0sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDNUMsTUFBTSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzdCLE1BQU0sUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNuQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0VBQXdFLEVBQUUsR0FBUyxFQUFFO1FBQ3BGLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDM0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNoRCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0VBQXdFLEVBQUUsR0FBUyxFQUFFO1FBQ3BGLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDM0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0ZBQXNGLEVBQUUsR0FBUyxFQUFFO1FBQ2xHLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtZQUMvQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUVOLENBQUMsQ0FBQyxDQUFBIn0=