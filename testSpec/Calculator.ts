import { by } from 'protractor';
import {Calculator} from '../pageObjects/Calculator'
var chai = require('chai');  
var expect = chai.expect;

describe('Testing the shop webpage', () => {

    beforeEach(async () => {
        let calculator = new Calculator()
        await calculator.website
    })

    it('Initial phase of rendering the website should display the title of "Super Calculator"', async () => {
        let calculator = new Calculator()
        calculator.title.getText().then(data => {
            expect(data).to.equal('Super Calculator')
        })
    })

    it('When first input and second input are given proper values with arithmetic operation shall display answer', async () => {
        let calculator = new Calculator()
        await calculator.firstInput.sendKeys(5)
        await calculator.secondInput.sendKeys(5)
        await calculator.operation.click()
        await calculator.goButton.click()
        await calculator.result.getText().then(data => {
                expect(data).to.equal('25')
        })
    })

    it('After calculation field history will increase by 1', async () => {
        let calculator = new Calculator()
        await calculator.firstInput.sendKeys(5)
        await calculator.secondInput.sendKeys(5)
        await calculator.operation.click()
        await calculator.goButton.click()
        await calculator.historyAll.count().then(data => {
            expect(parseInt(data)).to.equal(1)
        })
    })

    it('After calculation field history will increase by 2', async () => {
        let calculator = new Calculator()
        for(let i = 0; i < 2; i++){
            await calculator.firstInput.sendKeys(5)
            await calculator.secondInput.sendKeys(5)
            await calculator.operation.click()
            await calculator.goButton.click()
        }
        await calculator.historyAll.count().then((data) => {
            expect(parseInt(data)).to.equal(2)
        })
    })

    it('After adding to history, data must match', async () => {
        let calculator = new Calculator()
        await calculator.firstInput.sendKeys(5)
        await calculator.secondInput.sendKeys(5)
        await calculator.operation.click()
        await calculator.goButton.click()
        await calculator.firstExpression.get(0).element(by.css('td:nth-child(2)')).getText().then(data => {
            expect(data).to.equal('5 * 5')
        })
        await calculator.secondResult.get(0).element(by.css('td:nth-child(3)')).getText().then(data => {
            expect(parseInt(data)).to.equal(25)
        })
    })

    it('After adding another history, data must match for all', async () => {
        let calculator = new Calculator()
            await calculator.firstInput.sendKeys(5)
            await calculator.secondInput.sendKeys(5)
            await calculator.operation.click()
            await calculator.goButton.click()
            await calculator.firstInput.sendKeys(6)
            await calculator.secondInput.sendKeys(5)
            await calculator.operation.click()
            await calculator.goButton.click()
        await calculator.firstExpression.get(1).element(by.css('td:nth-child(2)')).getText().then(data => {
            expect(data).to.equal('5 * 5')
        })
        await calculator.secondResult.get(1).element(by.css('td:nth-child(3)')).getText().then(data => {
            expect(parseInt(data)).to.equal(25)
        })
        await calculator.firstExpression.get(0).element(by.css('td:nth-child(2)')).getText().then(data => {
            expect(data).to.equal('6 * 5')
        })
        await calculator.secondResult.get(0).element(by.css('td:nth-child(3)')).getText().then(data => {
            expect(parseInt(data)).to.equal(30)
        })
    })
})
