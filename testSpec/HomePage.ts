import {HomePage} from '../pageObjects/HomePage'
var chai = require('chai');  
var expect = chai.expect;

describe('pageObjects1 for forms test', () => {

    beforeEach(async () => {
        let homePage = new HomePage()
        await homePage.website
    })

    it('Test the form is submitted successfully', async () => {
        let homePage = new HomePage()
        await homePage.name.sendKeys('Hazrul')
        await homePage.email.sendKeys('Hazrul@123.com')
        await homePage.password.sendKeys('password')
        await homePage.gender.click()
        await homePage.submitButton.click()
        homePage.popUp.getText().then(data => {
            expect(data).to.equal('Success!')
        })
    })

    it('Test the form if home button is clicked redirect to the same home page', async () => {
        let homePage = new HomePage()
        homePage.homeButton.click()
        homePage.jumbotronTitle.getText().then(data => {
            expect(data).to.equal('Protractor Tutorial')
        })
    })

    it('Test the form if Shop button is clicked is redirected to the shop page', async () => {
        let homePage = new HomePage()
        homePage.shopButton.click()
        homePage.shopHomeTitle.getText().then(data => {
            expect(data).to.equal('ProtoCommerce Home')
        })
    })

    it('When data is typed in two-way data binding exmaple, output will be displayed in name', async () => {
        let homePage = new HomePage()
        homePage.twoWayDataBindingExample.sendKeys('There is data here').then(() => {
            homePage.name.getAttribute('value').then(data => {
                expect(data).to.equal('There is data here')
            })
        })
    })
    
})