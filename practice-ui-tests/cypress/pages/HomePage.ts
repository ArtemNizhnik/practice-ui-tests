import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

  private searchInput = '[data-test="search-query"]';
  private productCard = '.card';
  private logo = '.navbar-brand';
  private categoryFilter = '[data-test="category"]';

  open(): void {
    this.visit('/');
  }
    typeInSearch(productName: string): void {
    cy.get(this.searchInput)
      .clear()
      .type(productName);
  }

  submitSearch(): void {
    cy.get(this.searchInput)
      .type('{enter}');
  }
  
  verifyLogoVisible(): void {
    this.shouldBeVisible(this.logo);
  }

  verifyProductsVisible(): void {
    cy.get(this.productCard).should('have.length.greaterThan', 0);
  }

  searchProduct(productName: string): void {
  cy.get(this.searchInput)
    .clear()
    .type(productName)
    .type('{enter}');
}

  verifyProductExists(): void {
    cy.get(this.productCard).should('exist');
  }

verifyNoResults(): void {
  cy.get('.card').should('have.length', 0);
}
clickFirstProduct(): void {
  cy.get('[data-test="product-name"]')
    .first()
    .click();
}
}
