import {Shop} from '../pageObjects/Shop'
import {CheckOut} from '../pageObjects/CheckOut'

import {element, by, browser, ElementFinder} from 'protractor'
var chai = require('chai');  
var expect = chai.expect;

describe('pageObjects1 for forms test', () => {

    beforeEach(async () => {
        let shop = new Shop()
        await shop.website
    })

    it('When browser loads the webpage, check the initial data', async () => {
        let shop = new Shop()
        await shop.titleName.getText().then(data => {
            expect(data).to.equal('ProtoCommerce Home')
        })
        await shop.allCards.count().then(data => {
            expect(data).to.equal(4)
        })
        await shop.checkoutButton.getText().then(data => {
            expect(data).to.equal('Checkout ( 0 )\n(current)')
        })
        await shop.allCards.each(data => {
            data.element(by.css('h4[class="card-title"]')).getText().then(data => {
                console.log(data);
            })
        })
        await shop.allCards.each(data => {
            data.element(by.css('h5')).getText().then(data => {
                console.log(data);
            })
        })
    })

    it('When first option submit button is clicked, checkout should change to 1', async () => {
        let shop = new Shop()
        await shop.allCards.get(0).element(by.css('button[class="btn btn-info"]')).click()
        await shop.checkoutButton.getText().then(data => {
            expect(data).to.equal('Checkout ( 1 )\n(current)')
        })
    })

    it('When the checkout button is clicked, will be redirected to the checkout page', async () => {
        let shop = new Shop()
        await shop.checkoutButton.click()
        browser.getCurrentUrl().then(data => {
            expect(data).to.equal('https://qaclickacademy.github.io/protocommerce/shop')
        })
    })

    it('When an item is added to the checkout item, the item should be displayed on the checkout page', async () => {
        let shop = new Shop()
        let checkOut = new CheckOut()
        await shop.allCards.get(0).element(by.css('button[class="btn btn-info"]')).click()
        await shop.checkoutButton.click()
        await checkOut.allItemsChecked.count().then(data => {
            expect(data-2).to.equal(1)
        })
        await element.all(by.css('h4[class="media-heading"] a')).get(0).getText().then(data => {
            expect(data).to.equal('iphone X')
            })
    await checkOut.ItemQuantity.get(0).getAttribute('value').then(data => {
        expect(parseInt(data)).to.equal(1)
    })
    await checkOut.ItemCardFirst.element(by.css('td:nth-child(4) strong')).getText().then(data1 => {
        checkOut.ItemQuantity.get(0).getAttribute('value').then(data => {
            expect(parseInt(data)*parseInt(data1.split(" ")[1])).to.equal(100000)
        })
    })
    await checkOut.totalPriceOneItem.getText().then(data => {
        checkOut.ItemCardFirst.element(by.css('td:nth-child(4) strong')).getText().then(data1 => {
            expect(parseInt(data.split(" ")[1])).to.equal(parseInt(data1.split(" ")[1]))
        })
    })
})

    it('Similar to the top test case but with another item added', async () => {
        let shop = new Shop()
        let checkOut = new CheckOut()
        await shop.allCards.get(0).element(by.css('button[class="btn btn-info"]')).click()
        await shop.allCards.get(1).element(by.css('button[class="btn btn-info"]')).click()
        await shop.checkoutButton.click()
        await checkOut.allItemsChecked.count().then(data => {
            expect(data-2).to.equal(2)
        })
        await checkOut.ItemCardFirst.element(by.css('td:nth-child(1) h4[class="media-heading"] a')).getText().then(data => {
            expect(data).to.equal('iphone X')
        })
        await checkOut.ItemCardSecond.element(by.css('td:nth-child(1) h4[class="media-heading"] a')).getText().then(data => {
            expect(data).to.equal('Samsung Note 8')
        })
        await checkOut.ItemQuantity.get(0).getAttribute('value').then(data => {
            expect(parseInt(data)).to.equal(1)
        })
        await checkOut.ItemQuantity.get(1).getAttribute('value').then(data => {
            expect(parseInt(data)).to.equal(1)
        })
        await checkOut.ItemCardFirst.element(by.css('td:nth-child(3) strong')).getText().then(price1 => {
            checkOut.ItemCardSecond.element(by.css('td:nth-child(3) strong')).getText().then(price2 => {
                checkOut.totalPriceTwoItem.getText().then(total => {
                    expect(parseInt(price1.split(" ")[1]) + parseInt(price2.split(" ")[1])).to.equal(parseInt(total.split(" ")[1]))
                })
            })
        })
    })
})