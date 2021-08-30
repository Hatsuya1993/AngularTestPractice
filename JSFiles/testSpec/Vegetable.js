"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vegetable_1 = require("../pageObjects/Vegetable");
const protractor_1 = require("protractor");
const Cart_1 = require("../pageObjects/Cart");
const Country_1 = require("../pageObjects/Country");
var chai = require("chai");
var expect = chai.expect;
describe('Testing HomePage of Vegetable website', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When the page is loaded, title is displaying GREENKART', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.title.getText().then(data => {
            expect(data).to.equal('GREENKART');
        });
    }));
    it('When the page is loaded, total items displayed is 30', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.allProducts.count().then(data => {
            expect(data).to.equal(30);
        });
    }));
    it('When the page is loaded, total items and price should be zero initially', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.items.getText().then(data => {
            expect(parseInt(data)).to.equal(0);
        });
        yield vegetable.price.getText().then(data => {
            expect(parseInt(data)).to.equal(0);
        });
    }));
    it('When the page is loaded, default items for each is 1', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.allProducts.each((dataEach, index) => __awaiter(void 0, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.css(`div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(${index + 1}) input[type='number']`)).getAttribute('value').then(quantity => {
                expect(parseInt(quantity)).to.equal(1);
            });
        }));
    }));
    it('When the plus button is clicked, the quantity will be increased to 2', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.firstItemAdd.click();
        yield vegetable.allProducts.each(() => __awaiter(void 0, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.css(`div[class='products-wrapper'] div[class='products'] div[class='product']:nth-child(1) input[type='number']`)).getAttribute('value').then(quantity => {
                expect(parseInt(quantity)).to.equal(2);
            });
        }));
    }));
}));
describe('Testing the search functionality for the vegetable website', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When searching for something jibberish, a notice will be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.searchBar.sendKeys('abcdeg');
        yield vegetable.sorryNotice.getText().then(data => {
            expect(data).to.equal("Sorry, no products matched your search!");
        });
    }));
    it('When searching for brocolli, a result will be displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.searchBar.sendKeys('brocolli');
        yield vegetable.allProducts.count().then(data => {
            expect(data).to.equal(1);
        });
    }));
}));
describe('Testing the functionality for the add to cart button', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When the add to cart button for brocolli is pressed, the words would change to added', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.brocolliButtonAdd.getText().then(data => {
            expect(data).to.equal('✔ ADDED');
        });
    }));
    it('When an item is added to the cart, the items quantity would be incremented to 1 and price increments to the price of the item', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.items.getText().then(data => {
            expect(parseInt(data)).to.equal(1);
        });
        yield vegetable.price.getText().then((price) => __awaiter(void 0, void 0, void 0, function* () {
            yield vegetable.firstItemPrice.getText().then(data => {
                expect(price).to.equal(data[0]);
            });
        }));
    }));
    it('When another item is added to the cart, the items price and the quantity will increase', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.cauliflowerButtonAdd.click();
        yield vegetable.items.getText().then(data => {
            expect(parseInt(data)).to.equal(2);
        });
        yield vegetable.price.getText().then((total) => __awaiter(void 0, void 0, void 0, function* () {
            yield vegetable.firstItemPrice.getText().then((first) => __awaiter(void 0, void 0, void 0, function* () {
                yield vegetable.secondItemPrice.getText().then(second => {
                    expect(parseInt(total)).to.equal(parseInt(first) + parseInt(second));
                });
            }));
        }));
    }));
}));
describe('Testing the checkout button and functionality', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When the checkout button is pressed with no items added, it will display "You cart is empty"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.checkoutButton.click();
        yield vegetable.activeCartNotice.getText().then(data => {
            expect(data).to.equal('You cart is empty!');
        });
        yield vegetable.activeCartButtonText.getText().then(data => {
            expect(data).to.equal('PROCEED TO CHECKOUT');
        });
    }));
}));
describe('When an item is added, the checkout list will be updated', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('First item is added to the cart and matches the item itself', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.cartItems.count().then(data => {
            expect(data).to.equal(1);
        });
        yield vegetable.firstItemName.getText().then((data) => __awaiter(void 0, void 0, void 0, function* () {
            yield vegetable.firstCartItemsName.getText().then(next => {
                expect(next[0]).to.equal(data[0]);
            });
        }));
    }));
    it('Similar to the top but another item is added to the cart', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.cauliflowerButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.cartItems.count().then(data => {
            expect(data).to.equal(2);
        });
        yield vegetable.firstCartItemsName.getText().then((first) => __awaiter(void 0, void 0, void 0, function* () {
            yield vegetable.firstItemName.getText().then(final => {
                expect(first[0]).to.equal(final[0]);
            });
        }));
        yield vegetable.secondCartItemsName.getText().then((second) => __awaiter(void 0, void 0, void 0, function* () {
            yield vegetable.secondItemName.getText().then(final => {
                expect(second[0]).to.equal(final[0]);
            });
        }));
    }));
}));
describe('Testing the functionality of the cart', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('Checking the elements existance for the cart page', () => __awaiter(void 0, void 0, void 0, function* () {
        let EC = protractor_1.ExpectedConditions;
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.urlContains("cart"), 5000);
            yield protractor_1.browser.getCurrentUrl().then(data => {
                expect(data).to.equal('https://rahulshettyacademy.com/seleniumPractise/#/cart');
            });
        }));
        yield cart.title.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.table.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.number.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.productName.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.quantity.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.price.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.total.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.productImage.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.productNameData.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.priceData.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.totalData.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.promoCode.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.promoCodeButton.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.noOfItems.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.totalAmount.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.discount.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.totalAfterDiscount.isPresent().then(data => {
            expect(data).to.equal(true);
        });
        yield cart.placeOrder.isPresent().then(data => {
            expect(data).to.equal(true);
        });
    }));
}));
describe('Testing when item is added and moved to the cart page', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When 2 items are added to the cart, count for table items should be 2', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.cauliflowerButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click();
        yield cart.tableItems.count().then(data => {
            expect(data).to.equal(2);
        });
    }));
    it('When 2 items are added to the cart, the name will match for both', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.cauliflowerButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlContains("cart"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield cart.tableItemsNameFirst.getText().then(data => {
                    expect(data).to.equal('Brocolli - 1 Kg');
                });
                yield cart.tableItemsNameSecond.getText().then(data => {
                    expect(data).to.equal('Cauliflower - 1 Kg');
                });
            }));
        }));
    }));
    it('When 2 items are added to the cart, the total amount should be equivalent to the addition of both item', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.cauliflowerButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlContains("cart"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield cart.totalAmountPrice.getText().then((data) => __awaiter(void 0, void 0, void 0, function* () {
                    yield cart.tableItemsTotalFirst.getText().then((total1) => __awaiter(void 0, void 0, void 0, function* () {
                        yield cart.tableItemsTotalSecond.getText().then((total2) => __awaiter(void 0, void 0, void 0, function* () {
                            expect(parseInt(data)).to.equal(parseInt(total1) + parseInt(total2));
                        }));
                    }));
                }));
            }));
        }));
    }));
}));
describe('Testing the functionality of the selection of the country page', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('Checking the elements existance in the page', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        let country = new Country_1.Country();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlContains("cart"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield vegetable.placeOrder.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
                    yield protractor_1.browser.wait(EC.urlContains("country"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                        yield protractor_1.browser.getCurrentUrl().then(data => {
                            expect(data).to.equal("https://rahulshettyacademy.com/seleniumPractise/#/country");
                        });
                    }));
                }));
                yield country.title.isPresent().then(data => {
                    expect(data).to.equal(true);
                });
                yield country.chooseCountry.isPresent().then(data => {
                    expect(data).to.equal(true);
                });
                yield country.dropDown.isPresent().then(data => {
                    expect(data).to.equal(true);
                });
                yield country.checkBox.isPresent().then(data => {
                    expect(data).to.equal(true);
                });
                yield country.termsAndCondition.isPresent().then(data => {
                    expect(data).to.equal(true);
                });
                yield country.buttonProceed.isPresent().then(data => {
                    expect(data).to.equal(true);
                });
            }));
        }));
    }));
    it('Proceed button check unchecked box', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        let country = new Country_1.Country();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlContains("cart"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield cart.placeOrder.click().then().then(() => __awaiter(void 0, void 0, void 0, function* () {
                    yield protractor_1.browser.wait(EC.urlContains("country"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                        yield country.dropDownItems.click();
                        yield country.buttonProceed.click();
                        yield country.required.getText().then(data => {
                            expect(data).to.equal("Please accept Terms & Conditions - Required");
                        });
                    }));
                }));
            }));
        }));
    }));
    it('Proceed button check with checked box', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        let cart = new Cart_1.Cart();
        let country = new Country_1.Country();
        yield vegetable.brocolliButtonAdd.click();
        yield vegetable.checkoutButton.click();
        yield vegetable.proceedCheckout.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
            let EC = protractor_1.ExpectedConditions;
            yield protractor_1.browser.wait(EC.urlContains("cart"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                yield cart.placeOrder.click().then().then(() => __awaiter(void 0, void 0, void 0, function* () {
                    yield protractor_1.browser.wait(EC.urlContains("country"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                        yield country.dropDownItems.click();
                        yield country.checkBox.click();
                        yield country.buttonProceed.click().then(() => __awaiter(void 0, void 0, void 0, function* () {
                            yield country.success.getText().then(data => {
                                expect(data).to.equal("Thank you, your order has been placed successfully\nYou\'ll be redirected to Home page shortly!!");
                            });
                        }));
                    }));
                }));
            }));
        }));
    }));
}));
describe('Test the offers page link', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When the top deals if clicked, a new page will open with the offer url', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.topDeals.click();
        yield protractor_1.browser.getAllWindowHandles().then(data => {
            expect(data.length).to.equal(2);
        });
    }));
    it('After the new tab is opened, the url of the new tab should include "offers"', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.topDeals.click();
        yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(void 0, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().window(handles[1]).then(() => __awaiter(void 0, void 0, void 0, function* () {
                let EC = protractor_1.ExpectedConditions;
                yield protractor_1.browser.wait(EC.urlContains("offers"), 5000).then(() => __awaiter(void 0, void 0, void 0, function* () {
                    protractor_1.browser.getCurrentUrl().then(data => {
                        expect(data).to.equal("https://rahulshettyacademy.com/seleniumPractise/#/offers");
                    });
                }));
            }));
        }));
    }));
}));
describe('Testing flight booking page', () => __awaiter(void 0, void 0, void 0, function* () {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.website;
    }));
    it('When flighr booking is clicked, new page is open', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        let vegetable = new Vegetable_1.Vegetable();
        yield vegetable.flightBooking.click();
        yield protractor_1.browser.getAllWindowHandles().then(data => {
            expect(data.length - 2).to.equal(2);
        });
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVnZXRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvVmVnZXRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0RBQWtEO0FBQ2xELDJDQUFtRTtBQUNuRSw4Q0FBMEM7QUFDMUMsb0RBQWdEO0FBRWhELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO0FBRXhCLFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRSxHQUFTLEVBQUU7SUFFekQsVUFBVSxDQUFDLEdBQVEsRUFBRTtRQUNqQixNQUFNLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7UUFDL0IsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFBO0lBQzNCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsd0RBQXdELEVBQUUsR0FBUyxFQUFFO1FBQ3BFLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxQyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtRQUMvQixNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxzREFBc0QsRUFBRSxHQUFTLEVBQUU7UUFDbEUsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLElBQUksU0FBUyxHQUFHLElBQUks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QUU7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUMsQ0FBQTtRQUNGLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDLENBQUE7UUFDRixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMv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