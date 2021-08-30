import {element, by, browser, ElementFinder} from 'protractor'

export class HomePage {

    name: ElementFinder
    email: ElementFinder
    password: ElementFinder
    gender: ElementFinder
    submitButton: ElementFinder
    popUp: ElementFinder
    website: any
    homeButton: ElementFinder
    jumbotronTitle: ElementFinder
    shopButton: ElementFinder
    shopHomeTitle: ElementFinder
    twoWayDataBindingExample: ElementFinder

    constructor(){
        this.website = browser.get('https://qaclickacademy.github.io/protocommerce/')
        this.twoWayDataBindingExample = element(by.cssContainingText('h4', 'Two-way Data Binding example:')).element(by.css('input'))
        this.homeButton = element(by.cssContainingText('li[class="nav-item"] a', 'Home'))
        this.jumbotronTitle = element(by.cssContainingText('div[class="jumbotron"] h1', 'Protractor Tutorial'))
        this.shopButton = element(by.cssContainingText('li[class="nav-item"] a', 'Shop'))
        this.shopHomeTitle = element(by.cssContainingText('nav[class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top"] div a', 'ProtoCommerce Home'))
        this.name = element(by.css('input[name="name"]'))
        this.email = element(by.css('input[name="email"]'))
        this.password = element(by.css('input[type="password"]'))
        this.gender = element(by.cssContainingText('select[id="exampleFormControlSelect1"] option', 'Female'))
        this.submitButton = element(by.buttonText('Submit'))
        this.popUp = element(by.cssContainingText('div[class="alert alert-success alert-dismissible"] strong', 'Success!'))
    }

}