import {Vegetable} from '../pageObjects/Vegetable'
import {element, by, browser, ExpectedConditions} from 'protractor'
import { Cart } from '../pageObjects/Cart'
import { Country } from '../pageObjects/Country'
import { OfferPage } from '../pageObjects/OfferPage'
var chai = require("chai")
var expect = chai.expect

describe('Testing HomePage of Vegetable website', async () => {

    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When the page is loaded, title is displaying GREENKART', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.title.getText().then(data => {
            expect(data).to.equal('GREENKART')
        })
    })

    it('When the page is loaded, total items displayed is 30', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.allProducts.count().then(data => {
            expect(data).to.equal(30)
        })
    })

    it('When the page is loaded, total items and price should be zero initially', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.items.getText().then(data => {
            expect(parseInt(data)).to.equal(0)
        })
        await vegetable.price.getText().then(data => {
            expect(parseInt(data)).to.equal(0)
        })
    })

    it('When the page is loaded, default items for each is 1', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.allProducts.each(async (dataEach, index) => {
            element(by.css(`div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(${index+1}) input[type='number']`)).getAttribute('value').then(quantity => {
                expect(parseInt(quantity)).to.equal(1)
            })
        })
    })

    it('When the plus button is clicked, the quantity will be increased to 2', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.firstItemAdd.click()
        await vegetable.allProducts.each(async () => {
            element(by.css(`div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(1) input[type='number']`)).getAttribute('value').then(quantity => {
                expect(parseInt(quantity)).to.equal(2)
            })
        })
    })
})

describe('Testing the search functionality for the vegetable website', async () => {

    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When searching for something jibberish, a notice will be displayed', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.searchBar.sendKeys('abcdeg')
        await vegetable.sorryNotice.getText().then(data => {
            expect(data).to.equal("Sorry, no products matched your search!")
        })
    })

    it('When searching for brocolli, a result will be displayed', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.searchBar.sendKeys('brocolli')
        await vegetable.allProducts.count().then(data => {
            expect(data).to.equal(1)
        })
    })

})

describe('Testing the functionality for the add to cart button', async () => {


    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When the add to cart button for brocolli is pressed, the words would change to added', async () => {
        
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.brocolliButtonAdd.getText().then(data => {
            expect(data).to.equal('✔ ADDED')
        })
    })

    it('When an item is added to the cart, the items quantity would be incremented to 1 and price increments to the price of the item', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.items.getText().then(data => {
            expect(parseInt(data)).to.equal(1)
        })
        await vegetable.price.getText().then(async (price) => {
            await vegetable.firstItemPrice.getText().then(data => {
                expect(price).to.equal(data[0])
            })
        })
    })

    it('When another item is added to the cart, the items price and the quantity will increase', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.cauliflowerButtonAdd.click()
        await vegetable.items.getText().then(data => {
            expect(parseInt(data)).to.equal(2)
        })
        await vegetable.price.getText().then(async (total) => {
            await vegetable.firstItemPrice.getText().then(async(first) => {
                await vegetable.secondItemPrice.getText().then(second => {
                    expect(parseInt(total)).to.equal(parseInt(first)+parseInt(second))
                })
            })
        })
    })
})

describe('Testing the checkout button and functionality', async () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When the checkout button is pressed with no items added, it will display "You cart is empty"', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.checkoutButton.click()
        await vegetable.activeCartNotice.getText().then(data => {
            expect(data).to.equal('You cart is empty!')
        })
        await vegetable.activeCartButtonText.getText().then(data => {
            expect(data).to.equal('PROCEED TO CHECKOUT')
        })
    })

})

describe('When an item is added, the checkout list will be updated', async () => {

    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('First item is added to the cart and matches the item itself', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.cartItems.count().then(data => {
            expect(data).to.equal(1)
        })
        await vegetable.firstItemName.getText().then(async(data) => {
            await vegetable.firstCartItemsName.getText().then(next => {
                expect(next[0]).to.equal(data[0])
            })
        })
    })

    it('Similar to the top but another item is added to the cart', async () => {
        
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.cauliflowerButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.cartItems.count().then(data => {
            expect(data).to.equal(2)
        })
        await vegetable.firstCartItemsName.getText().then(async(first) => {
            await vegetable.firstItemName.getText().then(final => {
                expect(first[0]).to.equal(final[0])
            })
        })
        await vegetable.secondCartItemsName.getText().then(async(second) => {
            await vegetable.secondItemName.getText().then(final => {
                expect(second[0]).to.equal(final[0])
            })
        })
    })
})

describe('Testing the functionality of the cart', async () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('Checking the elements existance for the cart page', async () => {
        let EC = ExpectedConditions
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click().then(async () =>{
            await browser.wait(EC.urlContains("cart"), 5000)
            await browser.getCurrentUrl().then(data => {
                expect(data).to.equal('https://rahulshettyacademy.com/seleniumPractise/#/cart')
            })
        })
        await cart.title.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.table.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.number.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.productName.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.quantity.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.price.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.total.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.productImage.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.productNameData.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.priceData.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.totalData.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.promoCode.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.promoCodeButton.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.noOfItems.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.totalAmount.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.discount.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.totalAfterDiscount.isPresent().then(data => {
            expect(data).to.equal(true)
        })
        await cart.placeOrder.isPresent().then(data => {
            expect(data).to.equal(true)
        })
    })
})

describe('Testing when item is added and moved to the cart page', async () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When 2 items are added to the cart, count for table items should be 2', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.cauliflowerButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click()
        await cart.tableItems.count().then(data => {
            expect(data).to.equal(2)
        })
    })

    it('When 2 items are added to the cart, the name will match for both', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.cauliflowerButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click().then(async() => {
            let EC = ExpectedConditions
            await browser.wait(EC.urlContains("cart"), 5000).then(async() => {
                await cart.tableItemsNameFirst.getText().then(data => {
                    expect(data).to.equal('Brocolli - 1 Kg')
                })
                await cart.tableItemsNameSecond.getText().then(data => {
                    expect(data).to.equal('Cauliflower - 1 Kg')
                })
            })
        })
    })

     it('When 2 items are added to the cart, the total amount should be equivalent to the addition of both item', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.cauliflowerButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click().then(async() => {
            let EC = ExpectedConditions
            await browser.wait(EC.urlContains("cart"), 5000).then(async() => {
                await cart.totalAmountPrice.getText().then(async(data) => {
                    await cart.tableItemsTotalFirst.getText().then(async(total1) => {
                        await cart.tableItemsTotalSecond.getText().then(async(total2) => {
                            expect(parseInt(data)).to.equal(parseInt(total1)+parseInt(total2))
                        })
                    })
                })
            })
        })

     })

})

describe('Testing the functionality of the selection of the country page', async () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('Checking the elements existance in the page', async () => {

        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        let country = new Country()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click().then(async() => {
            let EC = ExpectedConditions
            await browser.wait(EC.urlContains("cart"), 5000).then(async() => {
                await vegetable.placeOrder.click().then(async () => {
                    await browser.wait(EC.urlContains("country"), 5000).then(async() => {
                        await browser.getCurrentUrl().then(data => {
                            expect(data).to.equal("https://rahulshettyacademy.com/seleniumPractise/#/country")
                        })
                    })
                })
                await country.title.isPresent().then(data => {
                    expect(data).to.equal(true)
                })
                await country.chooseCountry.isPresent().then(data => {
                    expect(data).to.equal(true)
                })
                await country.dropDown.isPresent().then(data => {
                    expect(data).to.equal(true)
                })
                await country.checkBox.isPresent().then(data => {
                    expect(data).to.equal(true)
                })
                await country.termsAndCondition.isPresent().then(data => {
                    expect(data).to.equal(true)
                })
                await country.buttonProceed.isPresent().then(data => {
                    expect(data).to.equal(true)
                })

            })
        })

    })

    it('Proceed button check unchecked box', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        let country = new Country()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click().then(async() => {
            let EC = ExpectedConditions
            await browser.wait(EC.urlContains("cart"), 5000).then(async() => {
                await cart.placeOrder.click().then().then(async() => {
                    await browser.wait(EC.urlContains("country"), 5000).then(async() => {
                await country.dropDownItems.click()
                await country.buttonProceed.click()
                await country.required.getText().then(data => {
                    expect(data).to.equal("Please accept Terms & Conditions - Required")
                })
                    })
                })
            })
        })
    })

    it('Proceed button check with checked box', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        let cart = new Cart()
        let country = new Country()
        await vegetable.brocolliButtonAdd.click()
        await vegetable.checkoutButton.click()
        await vegetable.proceedCheckout.click().then(async() => {
            let EC = ExpectedConditions
            await browser.wait(EC.urlContains("cart"), 5000).then(async() => {
                await cart.placeOrder.click().then().then(async() => {
                    await browser.wait(EC.urlContains("country"), 5000).then(async() => {
                await country.dropDownItems.click()
                await country.checkBox.click()
                await country.buttonProceed.click().then(async() => {
                    await country.success.getText().then(data => {
                        expect(data).to.equal("Thank you, your order has been placed successfully\nYou\'ll be redirected to Home page shortly!!")
                    })
                })
                    })
                })
            })
        })
    })
})

describe('Test the offers page link', async () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When the top deals if clicked, a new page will open with the offer url', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.topDeals.click()
        await browser.getAllWindowHandles().then(data => {
            expect(data.length).to.equal(2)
        })
    })

    it('After the new tab is opened, the url of the new tab should include "offers"', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.topDeals.click()
        await browser.getAllWindowHandles().then(async(handles) => {
            await browser.switchTo().window(handles[1]).then(async() => {
                let EC = ExpectedConditions
                await browser.wait(EC.urlContains("offers"), 5000).then(async () => {
                    browser.getCurrentUrl().then(data => {
                        expect(data).to.equal("https://rahulshettyacademy.com/seleniumPractise/#/offers")
                    })
                })
            })
        })
    })
})

describe('Testing flight booking page', async () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.website
    })

    it('When flighr booking is clicked, new page is open', async () => {
        await browser.waitForAngularEnabled(false)
        let vegetable = new Vegetable()
        await vegetable.flightBooking.click()
        await browser.getAllWindowHandles().then(data => {
            expect(data.length-2).to.equal(2)
        })
    })
})




