import { PageFactory } from "../../pages/PageFactory";
import { CheckoutPage } from "../../pages/CheckoutPage";

describe('Checkout Page Tests', () => {

  let checkout: CheckoutPage;

  beforeEach(() => {
  cy.clearLocalStorage();
  cy.clearCookies();

  cy.visit('/');
  cy.get('[data-test="product-name"]').first().click();
  cy.get('[data-test="add-to-cart"]').click();
  cy.get('[data-test="nav-cart"]').click();

  checkout = PageFactory.checkoutPage();
});

  it('Should open checkout page', () => {
    checkout.verifyOnCheckoutPage();
  });

  it('Should display product in checkout', () => {
    checkout.verifyProductExists();
  });

  it('Should display total price', () => {
    checkout.verifyTotalVisible();
  });

  it('Table should contain at least one product row', () => {
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });

  it('Total price should be numeric', () => {
    cy.get('[data-test="cart-total"]')
      .invoke('text')
      .then(text => {
        const numeric = text.replace(/[^\d.]/g, '');
        expect(numeric).to.match(/^\d+(\.\d{2})?$/);
      });
  });

  it('Checkout page should not be empty initially', () => {
    cy.get('tbody tr').should('exist');
  });

  it('URL should contain checkout', () => {
    cy.url().should('include', 'checkout');
  });
it('Checkout table should have product rows', () => {
  cy.get('tbody tr').should('have.length.greaterThan', 0);
});

it('Each product row should contain price', () => {
  cy.get('tbody tr').first().should('contain.text', '.');
});

it('Cart total should be greater than zero', () => {
  cy.get('tfoot')
    .contains('$')
    .invoke('text')
    .then(text => {
      const number = text.match(/\d+(\.\d+)?/);
      const value = number ? parseFloat(number[0]) : 0;
      expect(value).to.be.greaterThan(0);
    });
});


});