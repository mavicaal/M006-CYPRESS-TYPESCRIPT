/**
 * Base Page Object class
 * All page objects should extend this class
 */
export abstract class BasePage {
  /**
   * Click an element
   * @param selector - CSS selector
   */
  protected click(selector: string): void {
    cy.get(selector).click();
  }

  /**
   * Type text into an element
   * @param selector - CSS selector
   * @param text - Text to type
   */
  protected type(selector: string, text: string): void {
    cy.get(selector).type(text);
  }

  /**
   * Clear an input field
   * @param selector - CSS selector
   */
  protected clear(selector: string): void {
    cy.get(selector).clear();
  }

  /**
   * Check if an element is visible
   * @param selector - CSS selector
   */
  protected isVisible(selector: string): Cypress.Chainable {
    return cy.get(selector).should('be.visible');
  }

  /**
   * Check if an element contains text
   * @param selector - CSS selector
   * @param text - Text to check
   */
  protected containsText(selector: string, text: string): Cypress.Chainable {
    return cy.get(selector).should('contain', text);
  }

  /**
   * Get element text
   * @param selector - CSS selector
   */
  protected getText(selector: string): Cypress.Chainable {
    return cy.get(selector).invoke('text');
  }

  /**
   * Check element attribute
   * @param selector - CSS selector
   * @param attribute - Attribute name
   * @param value - Expected value
   */
  protected hasAttribute(
    selector: string,
    attribute: string,
    value: string
  ): Cypress.Chainable {
    return cy.get(selector).should('have.attr', attribute, value);
  }

  /**
   * Wait for an element to be visible
   * @param selector - CSS selector
   * @param timeout - Timeout in ms
   */
  protected waitForElementVissibility(
    selector: string,
    timeout: number = 5000
  ): Cypress.Chainable {
    return cy.get(selector, { timeout }).should('be.visible');
  }

  /**
   * Verify element exists in DOM
   * @param selector - CSS selector
   */
  protected elementExists(selector: string): Cypress.Chainable {
    return cy.get(selector).should('exist');
  }

  /**
   * Scroll to an element
   * @param selector - CSS selector
   */
  protected scrollToElement(selector: string): void {
    cy.get(selector).then(($element) => {
      $element[0].scrollIntoView();
    });
  }

  /**
   * Hover over an element
   * @param selector - CSS selector
   */
  protected hover(selector: string): void {
    cy.get(selector).trigger('mouseover');
  }

  /**
   * Get the current URL
   */
  protected getUrl(): Cypress.Chainable {
    return cy.url();
  }

  /**
   * Verify URL contains a specific string
   * @param expectedUrl - Expected URL string
   */
  protected urlContains(expectedUrl: string): Cypress.Chainable {
    return cy.url().should('include', expectedUrl);
  }

  /**
   * Wait for URL to change
   * @param timeout - Timeout in ms
   */
  protected waitForUrlChange(timeout: number = 5000): void {
    cy.url({ timeout } as any).should('not.be.empty');
  }
}

