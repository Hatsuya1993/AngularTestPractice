import { browser, by, element, ElementFinder } from 'protractor'

export class Vegetable{

    title: ElementFinder
    website: any
    allProducts: any
    items: ElementFinder
    price: ElementFinder
    searchBar: ElementFinder
    sorryNotice: ElementFinder
    brocolliButtonAdd: ElementFinder
    cauliflowerButtonAdd: ElementFinder
    firstItemPrice: any
    secondItemPrice: any
    firstItemAdd: any
    checkoutButton: ElementFinder
    activeCartNotice: ElementFinder
    activeCartButtonText: ElementFinder
    cartItems: any
    secondItemAdd: any
    firstItemName: any
    firstCartItemsName: any
    secondCartItemsName: any
    secondItemName: any
    proceedCheckout: any
    placeOrder: ElementFinder
    topDeals: ElementFinder
    flightBooking: ElementFinder

    constructor () {
        
        this.website = browser.get("https://rahulshettyacademy.com/seleniumPractise/#/")
        this.title = element(by.css("div[class='container'] div[class='brand greenLogo']"))
        this.allProducts = element.all(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']"))
        this.items = element(by.css("table tbody tr:nth-child(1) td:nth-child(3)"))
        this.price = element(by.css("table tbody tr:nth-child(2) td:nth-child(3)"))
        this.searchBar = element(by.css("input[type='search']"))
        this.sorryNotice = element(by.css("div[class='no-results'] h2"))
        this.brocolliButtonAdd = element(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(1) div[class='product-action'] button"))
        this.cauliflowerButtonAdd = element(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(2) div[class='product-action'] button"))
        this.firstItemPrice = element.all(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(1) p[class='product-price']"))
        this.secondItemPrice = element.all(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(2) p[class='product-price']"))
        this.firstItemAdd = element.all(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(1) a[class='increment']"))
        this.secondItemAdd = element.all(by.css("div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(1) a[class='increment']"))
        this.checkoutButton = element(by.css("a[class='cart-icon'] img"))
        this.activeCartNotice = element(by.css("div.container div.container div.cart div.cart-preview.active:nth-child(6) div:nth-child(1) div:nth-child(1) div.empty-cart > h2:nth-child(2)"))
        this.activeCartButtonText = element(by.css("div.container div.container div.cart div.cart-preview.active:nth-child(6) div.action-block:nth-child(2) > button.disabled"))
        this.cartItems = element.all(by.css("div.container div.container div.cart div.cart-preview.active:nth-child(6) div:nth-child(1) div:nth-child(1) ul.cart-items > li"))
        this.firstCartItemsName = element.all(by.css("div.container div.container div.cart div.cart-preview.active:nth-child(6) div:nth-child(1) div:nth-child(1) ul.cart-items li:nth-child(1) div.product-info p.product-name"))
        this.firstItemName = element.all(by.css("div.container div.products-wrapper div.products div.product:nth-child(1) h4.product-name"))
        this.secondItemName = element.all(by.css("div.container div.products-wrapper div.products div.product:nth-child(2) h4.product-name"))
        this.secondCartItemsName = element.all(by.css("div.container div.container div.cart div.cart-preview.active:nth-child(6) div:nth-child(1) div:nth-child(1) ul.cart-items li:nth-child(2) div.product-info p.product-name"))
        this.proceedCheckout = element(by.buttonText("PROCEED TO CHECKOUT"))
        this.placeOrder = element(by.buttonText('Place Order'))
        this.topDeals = element(by.css("header[style='margin-left: -121px;'] div[class='container'] div[class='cart'] a:nth-child(2)"))
        this.flightBooking = element(by.cssContainingText("header[style='margin-left: -121px;'] div[class='container'] div[class='cart'] a:nth-child(3)", "Flight Booking"))

    }   
}