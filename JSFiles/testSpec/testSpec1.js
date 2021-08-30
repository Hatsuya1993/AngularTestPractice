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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNwZWMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvdGVzdFNwZWMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWdEO0FBQ2hELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFFekMsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtRQUM3QixNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUE7SUFDMUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx5Q0FBeUMsRUFBRSxHQUFTLEVBQUU7UUFDckQsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN0QyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDL0MsTUFBTSxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM1QyxNQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDN0IsTUFBTSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25DLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3RUFBd0UsRUFBRSxHQUFTLEVBQUU7UUFDcEYsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMzQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3RUFBd0UsRUFBRSxHQUFTLEVBQUU7UUFDcEYsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMzQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzRkFBc0YsRUFBRSxHQUFTLEVBQUU7UUFDbEcsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsUUFBUSxDQUFDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDdkUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1lBQy9DLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUEifQ==