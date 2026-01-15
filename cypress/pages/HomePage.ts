import { BasePage } from './BasePage';
import { TIMEOUTS } from '../support/constants';

/**
 * Home Page Object
 */
export class HomePage extends BasePage {
  // Page selectors
  private selectors = {
    homePageHref: 'a[href="/home"]',
    resourcesHref: 'a[href="/resources"]',
    automationHeader: 'h1:contains("UI Test Automation"), h2:contains("UI Test Automation"), h3:contains("UI Test Automation")',
    automationImg: 'img[alt="Responsive image"]',
    dynamicIdHref: 'a[href="/dynamicid"]',
    classAttributeHref: 'a[href="/classattr"]',
    hiddenLayersHref: 'a[href="/hiddenlayers"]',
    loadDelayHref: 'a[href="/loaddelay"]',
    ajaxDataHref: 'a[href="/ajax"]',
    clientSideDelayHref: 'a[href="/clientdelay"]',
    clickHref: 'a[href="/click"]',
    textInputHref: 'a[href="/textinput"]',
    scrollbarsHref: 'a[href="/scrollbars"]',
    dynamicTableHref: 'a[href="/dynamictable"]',
    verifyTextHref: 'a[href="/verifytext"]',
    progressBarHref: 'a[href="/progressbar"]',
    visibilityHref: 'a[href="/visibility"]',
    sampleAppHref: 'a[href="/sampleapp"]',
    mouseOverHref: 'a[href="/mouseover"]',
    nonBreakingSpaceHref: 'a[href="/nbsp"]',
    overLappingElementHref: 'a[href="/overlapped"]',
    shadowDomHref: 'a[href="/shadowdom"]',
    alertsHref: 'a[href="/alerts"]',
    fileUploadHref: 'a[href="/upload"]',
    animatedButtonHref: 'a[href="/animation"]',
    disabledInputHref: 'a[href="/disabledinput"]',
    autowaitHref: 'a[href="/autowait"]',
  };

  /**
   * Navigate to home
   */
  navigateToHome(): void {
    cy.navigateToURL('/home');
  }

  /**
   * Verify home page is displayed
   */
  verifyHomePageIsDisplayed(): void {
    this.waitForElementVissibility(this.selectors.automationHeader, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.automationImg, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.homePageHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.resourcesHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.dynamicIdHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.classAttributeHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.hiddenLayersHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.loadDelayHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.ajaxDataHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.clientSideDelayHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.clickHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.textInputHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.scrollbarsHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.dynamicTableHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.verifyTextHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.progressBarHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.visibilityHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.sampleAppHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.mouseOverHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.nonBreakingSpaceHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.overLappingElementHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.shadowDomHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.alertsHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.fileUploadHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.animatedButtonHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.disabledInputHref, TIMEOUTS.default);
    this.waitForElementVissibility(this.selectors.autowaitHref, TIMEOUTS.default);
  }

  /**
   * Click Home link
   */
  clickHomeLink(): void {
    this.click(this.selectors.homePageHref);
  }

  /**
   * Verify Home link is visible and contains "Home" text
   */
  verifyHomeLinksExists(): void {
    this.elementExists(this.selectors.homePageHref);
    this.containsText(this.selectors.homePageHref, 'Home');
  }
}
