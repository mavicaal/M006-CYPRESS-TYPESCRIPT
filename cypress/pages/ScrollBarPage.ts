
/**
 * Scroll Bars Page Object
 */
import { BasePage } from "./BasePage";

export class ScrollBarPage extends BasePage {
  // Page selectors
  private selectors = {
    hiddenButton: 'button#hidingButton',
  };

    /**
     * Navigate to scrollbars page
     * */
    navigateToScrollBars(): void {
      cy.navigateToURL('/scrollbars');
    }

    lookForHiddenButton(): void {
        this.scrollToElement(this.selectors.hiddenButton);
    }

}