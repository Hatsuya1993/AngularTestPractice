"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const protractor_1 = require("protractor");
class HomePage {
    constructor() {
        this.website = protractor_1.browser.get('https://qaclickacademy.github.io/protocommerce/');
        this.twoWayDataBindingExample = protractor_1.element(protractor_1.by.cssContainingText('h4', 'Two-way Data Binding example:')).element(protractor_1.by.css('input'));
        this.homeButton = protractor_1.element(protractor_1.by.cssContainingText('li[class="nav-item"] a', 'Home'));
        this.jumbotronTitle = protractor_1.element(protractor_1.by.cssContainingText('div[class="jumbotron"] h1', 'Protractor Tutorial'));
        this.shopButton = protractor_1.element(protractor_1.by.cssContainingText('li[class="nav-item"] a', 'Shop'));
        this.shopHomeTitle = protractor_1.element(protractor_1.by.cssContainingText('nav[class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top"] div a', 'ProtoCommerce Home'));
        this.name = protractor_1.element(protractor_1.by.css('input[name="name"]'));
        this.email = protractor_1.element(protractor_1.by.css('input[name="email"]'));
        this.password = protractor_1.element(protractor_1.by.css('input[type="password"]'));
        this.gender = protractor_1.element(protractor_1.by.cssContainingText('select[id="exampleFormControlSelect1"] option', 'Female'));
        this.submitButton = protractor_1.element(protractor_1.by.buttonText('Submit'));
        this.popUp = protractor_1.element(protractor_1.by.cssContainingText('div[class="alert alert-success alert-dismissible"] strong', 'Success!'));
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Ib21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBOEQ7QUFFOUQsTUFBYSxRQUFRO0lBZWpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO1FBQzdFLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsK0JBQStCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDN0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ3ZHLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNqRixJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLGlGQUFpRixFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUMzSixJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLCtDQUErQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDdEcsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDJEQUEyRCxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUE7SUFDdkgsQ0FBQztDQUVKO0FBOUJELDRCQThCQyJ9