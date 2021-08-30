import {element, by, browser, ExpectedConditions} from 'protractor'
import { OfferPage } from '../pageObjects/OfferPage'
var chai = require("chai")
var expect = chai.expect

describe('Testing offer page', () => {
    
    beforeEach(async() => {
        await browser.waitForAngularEnabled(false)
        let offerPage = new OfferPage()
        await offerPage.website
    })

    it('After the link is checked, check if the elements exist specific to this view', async () => {
        await browser.waitForAngularEnabled(false)
        let offerPage = new OfferPage()
        await offerPage.title.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.pageSize.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.pageDropDown.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.paginationNumber.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.search.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.searchInput.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.columnOne.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.columnTwo.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.columnThree.isDisplayed().then(data => {
            expect(data).to.be.true
        })
        await offerPage.noOfRows.isDisplayed().then(data => {
            expect(data).to.be.true
        })
    })

    it('Testing the search functionality', async () => {
        await browser.waitForAngularEnabled(false)
        let offerPage = new OfferPage()
        await offerPage.searchInput.sendKeys("tomato")
        await offerPage.noOfRowsEachFirst.getText().then(data => {
            expect(data).to.equal("Tomato")
        })
    })

})
