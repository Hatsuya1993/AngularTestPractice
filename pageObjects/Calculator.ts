import {element, by, browser, ElementFinder} from 'protractor'

export class Calculator {
    title: ElementFinder
    firstInput: ElementFinder
    operation: ElementFinder
    secondInput: ElementFinder
    goButton: ElementFinder
    result: ElementFinder
    website: any
    historyAll: any
    firstExpression: any
    secondResult: any
    eachHistory: any

    constructor () {
        this.website = browser.get('https://juliemr.github.io/protractor-demo/')
        this.title = element(by.cssContainingText('div h3', 'Super Calculator'))
        this.firstInput = element(by.model('first'))
        this.secondInput = element(by.model('second'))
        this.operation = element(by.cssContainingText('select[ng-model="operator"] option', '*'))
        this.goButton = element(by.id('gobutton'))
        this.result = element(by.css('h2[class="ng-binding"]'))
        this.historyAll = element.all(by.repeater('result in memory'))
        this.firstExpression = element.all(by.repeater('result in memory'))
        this.secondResult = element.all(by.repeater('result in memory'))
    } 
}