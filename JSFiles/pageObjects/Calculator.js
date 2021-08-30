"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
const protractor_1 = require("protractor");
class Calculator {
    constructor() {
        this.website = protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
        this.title = protractor_1.element(protractor_1.by.cssContainingText('div h3', 'Super Calculator'));
        this.firstInput = protractor_1.element(protractor_1.by.model('first'));
        this.secondInput = protractor_1.element(protractor_1.by.model('second'));
        this.operation = protractor_1.element(protractor_1.by.cssContainingText('select[ng-model="operator"] option', '*'));
        this.goButton = protractor_1.element(protractor_1.by.id('gobutton'));
        this.result = protractor_1.element(protractor_1.by.css('h2[class="ng-binding"]'));
        this.historyAll = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
        this.firstExpression = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
        this.secondResult = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThEO0FBRTlELE1BQWEsVUFBVTtJQWFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQTtRQUN4RSxJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7UUFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUN6RixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0NBQ0o7QUF6QkQsZ0NBeUJDIn0=