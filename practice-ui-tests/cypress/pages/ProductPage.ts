import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {

  private addToCartButton = '[data-test="add-to-cart"]';
  private productTitle = '[data-test="product-name"]';
  private price = '[data-test="unit-price"]';
  private quantityInput = '[data-test="quantity"]';

  verifyProductTitleVisible(): void {
    this.shouldBeVisible(this.productTitle);
  }

  verifyPriceVisible(): void {
    this.shouldBeVisible(this.price);
  }

  addToCart(): void {
    cy.get(this.addToCartButton).click();
  }

  changeQuantity(value: string): void {
  cy.get(this.quantityInput)
    .invoke('val', value)
    .trigger('input')
    .trigger('change');
}

  verifyUrlContainsProduct(): void {
    cy.url().should('include', 'product');
  }

}