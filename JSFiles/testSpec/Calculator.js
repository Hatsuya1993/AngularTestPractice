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
const Calculator_1 = require("../pageObjects/Calculator");
var chai = require('chai');
var expect = chai.expect;
describe('Testing the shop webpage', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        yield calculator.website;
    }));
    it('Initial phase of rendering the website should display the title of "Super Calculator"', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        calculator.title.getText().then(data => {
            expect(data).to.equal('Super Calculator');
        });
    }));
    it('When first input and second input are given proper values with arithmetic operation shall display answer', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        yield calculator.firstInput.sendKeys(5);
        yield calculator.secondInput.sendKeys(5);
        yield calculator.operation.click();
        yield calculator.goButton.click();
        yield calculator.result.getText().then(data => {
            expect(data).to.equal('25');
        });
    }));
    it('After calculation field history will increase by 1', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        yield calculator.firstInput.sendKeys(5);
        yield calculator.secondInput.sendKeys(5);
        yield calculator.operation.click();
        yield calculator.goButton.click();
        yield calculator.historyAll.count().then(data => {
            expect(parseInt(data)).to.equal(1);
        });
    }));
    it('After calculation field history will increase by 2', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        for (let i = 0; i < 2; i++) {
            yield calculator.firstInput.sendKeys(5);
            yield calculator.secondInput.sendKeys(5);
            yield calculator.operation.click();
            yield calculator.goButton.click();
        }
        yield calculator.historyAll.count().then((data) => {
            expect(parseInt(data)).to.equal(2);
        });
    }));
    it('After adding to history, data must match', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        yield calculator.firstInput.sendKeys(5);
        yield calculator.secondInput.sendKeys(5);
        yield calculator.operation.click();
        yield calculator.goButton.click();
        yield calculator.firstExpression.get(0).element(protractor_1.by.css('td:nth-child(2)')).getText().then(data => {
            expect(data).to.equal('5 * 5');
        });
        yield calculator.secondResult.get(0).element(protractor_1.by.css('td:nth-child(3)')).getText().then(data => {
            expect(parseInt(data)).to.equal(25);
        });
    }));
    it('After adding another history, data must match for all', () => __awaiter(void 0, void 0, void 0, function* () {
        let calculator = new Calculator_1.Calculator();
        yield calculator.firstInput.sendKeys(5);
        yield calculator.secondInput.sendKeys(5);
        yield calculator.operation.click();
        yield calculator.goButton.click();
        yield calculator.firstInput.sendKeys(6);
        yield calculator.secondInput.sendKeys(5);
        yield calculator.operation.click();
        yield calculator.goButton.click();
        yield calculator.firstExpression.get(1).element(protractor_1.by.css('td:nth-child(2)')).getText().then(data => {
            expect(data).to.equal('5 * 5');
        });
        yield calculator.secondResult.get(1).element(protractor_1.by.css('td:nth-child(3)')).getText().then(data => {
            expect(parseInt(data)).to.equal(25);
        });
        yield calculator.firstExpression.get(0).element(protractor_1.by.css('td:nth-child(2)')).getText().then(data => {
            expect(data).to.equal('6 * 5');
        });
        yield calculator.secondResult.get(0).element(protractor_1.by.css('td:nth-child(3)')).getText().then(data => {
            expect(parseInt(data)).to.equal(30);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RTcGVjL0NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0M7QUFDaEMsMERBQW9EO0FBQ3BELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUU7SUFFdEMsVUFBVSxDQUFDLEdBQVMsRUFBRTtRQUNsQixJQUFJLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtRQUNqQyxNQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUE7SUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx1RkFBdUYsRUFBRSxHQUFTLEVBQUU7UUFDbkcsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7UUFDakMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUM3QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMEdBQTBHLEVBQUUsR0FBUyxFQUFFO1FBQ3RILElBQUksVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1FBQ2pDLE1BQU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdkMsTUFBTSxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxNQUFNLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUE7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QUM3RixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxRixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3RixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxRixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9