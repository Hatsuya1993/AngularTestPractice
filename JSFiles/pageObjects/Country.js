"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Country = void 0;
const protractor_1 = require("protractor");
class Country {
    constructor() {
        this.title = protractor_1.element(protractor_1.by.css("div.container div.brand.greenLogo"));
        this.chooseCountry = protractor_1.element(protractor_1.by.css("div.products-wrapper div.products label"));
        this.dropDown = protractor_1.element(protractor_1.by.css("div.products-wrapper div.products div.wrapperTwo select[style='width: 200px;']"));
        this.checkBox = protractor_1.element(protractor_1.by.css("input[type='checkbox']"));
        this.termsAndCondition = protractor_1.element(protractor_1.by.css("a[target='_blank']"));
        this.buttonProceed = protractor_1.element(protractor_1.by.buttonText("Proceed"));
        this.dropDownItems = protractor_1.element.all(protractor_1.by.css("div.products-wrapper div.products div.wrapperTwo select[style='width: 200px;'] option:nth-child(2)"));
        this.required = protractor_1.element(protractor_1.by.css("span.errorAlert b"));
        this.success = protractor_1.element(protractor_1.by.css("span[style='color:green;font-size:25px']"));
    }
}
exports.Country = Country;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0NvdW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQThEO0FBRTlELE1BQWEsT0FBTztJQVloQjtRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQTtRQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUE7UUFDL0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQyxDQUFBO1FBQ2pILElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxvR0FBb0csQ0FBQyxDQUFDLENBQUE7UUFDOUksSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQTtJQUM5RSxDQUFDO0NBQ0o7QUF4QkQsMEJBd0JDIn0=