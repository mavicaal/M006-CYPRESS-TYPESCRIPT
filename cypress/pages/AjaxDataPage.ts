/**
 * Ajax Data Page Object
 */
import { BasePage } from "./BasePage";
import { TIMEOUTS } from "../support/constants";

export class AjaxDataPage extends BasePage {
    // Page selectors
    private selectors = {
        ajaxButton: 'button#ajaxButton',
        ajaxDataText: 'div#content > p:contains("Data loaded with AJAX get request.")',
    }

    /**
     * Navigate to ajax data page
     * */
    navigateToAjaxData(): void {
      cy.navigateToURL('/ajax');
    }

    /**
     * Click to ajax button
     * */
    clickAjaxButton(): void {
        this.click(this.selectors.ajaxButton);
    }
    /**
     * Get ajax data text
     * */
    getAjaxDataText(): void {
        this.waitForElementVissibility(this.selectors.ajaxDataText, TIMEOUTS.extended);
    }
}