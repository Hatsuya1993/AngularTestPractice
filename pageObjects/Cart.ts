import {element, by, browser, ElementFinder, $$} from 'protractor'

export class Cart {

    title: ElementFinder
    table: ElementFinder
    number: ElementFinder
    productName: ElementFinder
    quantity: ElementFinder
    price: ElementFinder
    total: ElementFinder
    productImage: ElementFinder
    productNameData: ElementFinder
    quantityData: ElementFinder
    priceData: ElementFinder
    totalData: ElementFinder
    promoCode: ElementFinder
    promoCodeButton: ElementFinder
    noOfItems: ElementFinder
    totalAmount: ElementFinder
    discount: ElementFinder
    totalAfterDiscount: ElementFinder
    placeOrder: ElementFinder
    tableItems: any
    tableItemsNameFirst: any
    tableItemsNameSecond: any
    tableItemsTotalFirst: any
    tableItemsTotalSecond: any
    totalAmountPrice: ElementFinder

    constructor(){

        this.title = element(by.css("div.container div.brand.greenLogo"))
        this.table = element(by.css("div.products-wrapper div.products table"))
        this.number = element(by.css("thead tr td:nth-child(1) b"))
        this.productName = element(by.css("thead tr td:nth-child(2) b"))
        this.quantity = element(by.css("thead tr td:nth-child(3) b"))
        this.price = element(by.css("thead tr td:nth-child(3) b"))
        this.total = element(by.css("thead tr td:nth-child(3) b"))
        this.productImage = element(by.css("tbody tr td:nth-child(1) img.product-image"))
        this.productNameData = element(by.css("tbody tr td:nth-child(2) p.product-name"))
        this.quantityData = element(by.css("tbody tr td:nth-child(3) p.quantity"))
        this.priceData = element(by.css("tbody tr td:nth-child(4) p.amount"))
        this.totalData = element(by.css("tbody tr td:nth-child(5) p.amount"))
        this.promoCode = element(by.css("div.promoWrapper input[type='text']"))
        this.promoCodeButton = element(by.css("div.promoWrapper button.promoBtn"))
        this.noOfItems = element(by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] b"))
        this.totalAmount = element(by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] br + b"))
        this.discount = element(by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] span + br + b"))
        this.discount = element(by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] span + br + b"))
        this.totalAfterDiscount = element(by.css("div[style='text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;'] span.totAmt + br + b"))
        this.placeOrder = element(by.buttonText("Place Order"))
        this.tableItems = element.all(by.css("tbody tr"))
        this.tableItemsNameFirst =  element.all(by.css("tbody tr")).get(0).element(by.css("td:nth-child(2)"))
        this.tableItemsTotalFirst =  element.all(by.css("tbody tr")).get(0).element(by.css("td:nth-child(5)"))
        this.tableItemsTotalSecond =  element.all(by.css("tbody tr")).get(1).element(by.css("td:nth-child(5)"))
        this.tableItemsNameSecond =  element.all(by.css("tbody tr")).get(1).element(by.css("td:nth-child(2)"))
        this.totalAmountPrice = element(by.css("span.totAmt"))
    }
}