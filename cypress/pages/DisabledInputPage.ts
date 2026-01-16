/* 
* DisabledInput Page Object 
* Page Object Model for the Disabled Input page
*/

import { BasePage } from "./BasePage";

export class DisabledInputPage extends BasePage {
    // Page selectors
    private selectors = {
        disabledInputField: 'input#inputField',
        enableButton: 'button#enableButton',
        divStatus: 'div#opstatus',
    }

    /**
     * Navigate to Disabled Input page
     * */
    navigateToDisabledInput(): void {
      cy.navigateToURL('/disabledinput');
    }

    /*
    * Enable the input field
    * */
    enableInputField(): void {
      this.click(this.selectors.enableButton);
      cy.get(this.selectors.disabledInputField).should('be.enabled');
    }
    
    
    validateInputFieldText(inputText: string, expectedMessage: string): void {
      this.type(this.selectors.disabledInputField, inputText);
      this.click(this.selectors.divStatus);
      this.getText(this.selectors.divStatus).should('equal', expectedMessage);
    }
}