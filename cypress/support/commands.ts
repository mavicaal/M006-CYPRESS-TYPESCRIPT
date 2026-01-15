/**
 * Type definitions for custom Cypress commands
 * Extends Cypress Chainable interface to recognize custom commands
 */
declare namespace Cypress {
  interface Chainable {
    /**
     * Navigate to URL with verification
     * @param url - The URL path to navigate to
     * @example cy.navigateToURL('/dashboard')
     */
    navigateToURL(url: string): Chainable;
  }
}   
/**
 * Navigate to URL safely
 * Usage: cy.navigateToURL('/dashboard')
 */
// @ts-expect-error - Cypress namespace is available at runtime
Cypress.Commands.add('navigateToURL', (url: string) => {
  cy.visit(url);
  cy.url().should('include', url);
});

