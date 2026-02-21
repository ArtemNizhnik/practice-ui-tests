export class BasePage {

  visit(path: string): void {
    cy.visit(path);
  }

  getElement(selector: string) {
    return cy.get(selector);
  }

  getElementByText(text: string) {
    return cy.contains(text);
  }

  click(selector: string): void {
    this.getElement(selector).click();
  }

  type(selector: string, value: string): void {
    this.getElement(selector).type(value);
  }

  shouldBeVisible(selector: string): void {
    this.getElement(selector).should('be.visible');
  }

}