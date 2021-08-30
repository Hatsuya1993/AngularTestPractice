"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageObjects1 = void 0;
const protractor_1 = require("protractor");
class pageObjects1 {
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
exports.pageObjects1 = pageObjects1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZU9iamVjdHMxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvcGFnZU9iamVjdHMxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE4RDtBQUU5RCxNQUFhLFlBQVk7SUFlckI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUE7UUFDN0UsSUFBSSxDQUFDLHdCQUF3QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSwrQkFBK0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM3SCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDakYsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQywyQkFBMkIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDdkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsaUZBQWlGLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQzNKLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFBO1FBQ3pELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsK0NBQStDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUN0RyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsMkRBQTJELEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUN2SCxDQUFDO0NBRUo7QUE5QkQsb0NBOEJDIn0=