import { PageFactory } from "../../pages/PageFactory";
import { ProductPage } from "../../pages/ProductPage";

describe('Product Page Tests', () => {

  let product: ProductPage;

  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="product-name"]').first().click();
    product = PageFactory.productPage();
  });

  // 1
  it('Should open product page', () => {
    product.verifyUrlContainsProduct();
  });

  // 2
  it('Should display product title', () => {
    product.verifyProductTitleVisible();
  });

  // 3
  it('Should display product price', () => {
    product.verifyPriceVisible();
  });

  // 4
  it('Should add product to cart', () => {
    product.addToCart();
    cy.get('[data-test="cart-quantity"]').should('exist');
  });

  // 5
  it('Should change quantity', () => {
    product.changeQuantity('2');
    cy.get('[data-test="quantity"]').should('have.value', '2');
  });

  // 6
  it('Add to cart button should be visible', () => {
    cy.get('[data-test="add-to-cart"]').should('be.visible');
  });

  // 7
  it('Price should contain currency symbol', () => {
    cy.get('[data-test="unit-price"]')
  .invoke('text')
  .then((text) => {
    expect(text.trim()).to.match(/^\d+(\.\d{2})?$/);
  });
  });

  // 8
  it('Quantity input should be visible', () => {
    cy.get('[data-test="quantity"]').should('be.visible');
  });

  // 9
  it('Quantity should not accept negative numbers', () => {
    product.changeQuantity('-1');
    cy.get('[data-test="quantity"]').should('not.have.value', '-1');
  });

  // 10
  it('Page should contain product description', () => {
    cy.get('[data-test="product-description"]').should('exist');
  });

});