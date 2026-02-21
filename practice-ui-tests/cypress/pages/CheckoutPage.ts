import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {

  private productRow = 'tbody tr';
  private removeButton = 'button.btn-danger';
  private totalPrice = 'tfoot strong';
  private pageTitle = '.container h1';

  verifyOnCheckoutPage(): void {
    cy.url().should('include', 'checkout');
  }

  verifyProductExists(): void {
    cy.get(this.productRow).should('have.length.greaterThan', 0);
  }

  removeFirstProduct(): void {
    cy.get(this.removeButton).first().click();
  }

  verifyCartEmpty(): void {
    cy.get(this.productRow).should('have.length', 0);
  }

  verifyTotalVisible(): void {
    cy.get(this.totalPrice).should('exist');
  }

  verifyTitleVisible(): void {
    cy.get(this.pageTitle).should('contain.text', 'Checkout');
  }
}