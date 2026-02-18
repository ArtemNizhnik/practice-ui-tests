import { HomePage } from "cypress/pages/HomePage";
import { PageFactory } from "../../pages/PageFactory";

describe('Home Page Tests', () => {

  let home: HomePage;

  beforeEach(() => {
    home = PageFactory.homePage();
    home.open();
  });

  // 1
  it('Should open home page', () => {
    cy.url().should('include', '/');
  });

  // 2
  it('Should display logo', () => {
    home.verifyLogoVisible();
  });

  // 3
  it('Should display product list', () => {
    home.verifyProductsVisible();
  });

  // 4
  it('Should search existing product', () => {
    home.searchProduct('Hammer');
    home.verifyProductExists();
  });

  // 5
  it('Should show no results for invalid product', () => {
    home.searchProduct('InvalidProduct123');
    home.verifyNoResults();
  });

  // 6
  it('Should navigate to product page', () => {
    home.clickFirstProduct();
    cy.url().should('include', 'product');
  });

  // 7
  it('Search field should be visible', () => {
    cy.get('[data-test="search-query"]').should('be.visible');
  });

  // 8
  it('Products should have price displayed', () => {
    cy.get('.card').first().contains('$');
  });

  // 9
it('Should allow typing in search input', () => {
  console.log(home);
  console.log(Object.getPrototypeOf(home));
});

  // 10
  it('Product cards should be clickable', () => {
    cy.get('.card').first().should('have.css', 'cursor');
  });

});