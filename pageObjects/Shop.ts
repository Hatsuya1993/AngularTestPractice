import {element, by, browser, ElementFinder} from 'protractor'

export class Shop {

    website: any
    titleName: ElementFinder
    allCards: any
    checkoutButton: ElementFinder

    constructor () {
        this.website = browser.get('https://qaclickacademy.github.io/protocommerce/shop')
        this.titleName = element(by.cssContainingText('div[class="container"] a[class="navbar-brand"]', 'ProtoCommerce Home'))
        this.allCards = element.all(by.css('app-card-list[class="row"] app-card'))
        this.checkoutButton = element(by.css('a[class="nav-link btn btn-primary"]'))
    }
}