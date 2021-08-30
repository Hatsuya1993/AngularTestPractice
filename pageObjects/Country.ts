import {element, by, browser, ElementFinder} from 'protractor'

export class Country {

    title: ElementFinder
    chooseCountry: ElementFinder
    dropDown: ElementFinder
    checkBox: ElementFinder
    termsAndCondition: ElementFinder
    buttonProceed: ElementFinder
    dropDownItems: any
    required: ElementFinder
    success: ElementFinder

    constructor () {

        this.title = element(by.css("div.container div.brand.greenLogo"))
        this.chooseCountry = element(by.css("div.products-wrapper div.products label"))
        this.dropDown = element(by.css("div.products-wrapper div.products div.wrapperTwo select[style='width: 200px;']"))
        this.checkBox = element(by.css("input[type='checkbox']"))
        this.termsAndCondition = element(by.css("a[target='_blank']"))
        this.buttonProceed = element(by.buttonText("Proceed"))
        this.dropDownItems = element.all(by.css("div.products-wrapper div.products div.wrapperTwo select[style='width: 200px;'] option:nth-child(2)"))
        this.required = element(by.css("span.errorAlert b"))
        this.success = element(by.css("span[style='color:green;font-size:25px']"))
    }
}