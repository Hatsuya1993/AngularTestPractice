import { threadId } from 'node:worker_threads'
import {element, by, browser, ElementFinder} from 'protractor'

export class CheckOut {

    website: any
    allItemsChecked: any
    ItemCardFirst: ElementFinder
    ItemQuantity: any
    ItemCardSecond: ElementFinder
    totalPriceOneItem: ElementFinder
    totalPriceTwoItem: ElementFinder

    constructor () {
        this.website = browser.get('https://qaclickacademy.github.io/protocommerce/shop')
        this.allItemsChecked = element.all(by.css('tbody tr'))
        this.ItemQuantity = element.all(by.id('exampleInputEmail1'))
        this.ItemCardFirst = element(by.css('tbody tr:nth-child(1)'))
        this.ItemCardSecond = element(by.css('tbody tr:nth-child(2)'))
        this.totalPriceOneItem = element(by.css('tbody tr:nth-child(2) td:nth-child(5) h3 strong'))
        this.totalPriceTwoItem = element(by.css('tbody tr:nth-child(3) td:nth-child(5) h3 strong'))
    }
}