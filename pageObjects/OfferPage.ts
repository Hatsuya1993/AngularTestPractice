import { browser, by, element, ElementFinder } from 'protractor'

export class OfferPage {

    website: any
    getURL: any
    topDeals: ElementFinder
    title: ElementFinder
    pageSize: ElementFinder
    pageDropDown: ElementFinder
    paginationNumber: ElementFinder
    search: ElementFinder
    searchInput: ElementFinder
    columnOne: ElementFinder
    columnTwo: ElementFinder
    columnThree: ElementFinder
    noOfRows: ElementFinder
    noOfRowsEachFirst: ElementFinder

    constructor () {

        this.website = browser.get("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        this.getURL = browser.getCurrentUrl()
        this.topDeals = element(by.css("header[style='margin-left: -121px;'] div[class='container'] div[class='cart'] a:nth-child(2)"))
        this.title = element(by.css("div.container div.brand.greenLogo div.brand.greenLogo"))
        this.pageSize = element(by.css("div.row div.col-xs-4 div label"))
        this.pageDropDown = element(by.css("div.row div.col-xs-4 div select"))
        this.paginationNumber = element(by.css("div.row div.col-xs-8 ul.pagination.pull-right"))
        this.search = element(by.css("div.row div.col-xs-4 div label[for='page-menu']"))
        this.searchInput = element(by.css("div.row div.col-xs-4 div input[type='search']"))
        this.columnOne = element(by.css("thead tr th:nth-child(1)"))
        this.columnTwo = element(by.css("thead tr th:nth-child(2)"))
        this.columnThree = element(by.css("thead tr th:nth-child(3)"))
        this.noOfRows = element(by.css("tbody"))
        this.noOfRowsEachFirst = element(by.css("tbody tr:nth-child(1) td:nth-child(1)"))

    }

}