import { expect } from 'chai';
import { HomePage } from '../pages/HomePage';

describe('Home Page Feature - POM Pattern Example', () => {
  // Instantiate page object
  const homePage = new HomePage();

  beforeEach(() => {
    // Navigate to home page before each test
    homePage.navigateToHome();
  });

  it('TC001: Verify home page is displayed', () => {
    // Verify the home page elements are present
    homePage.verifyHomePageIsDisplayed();
  });

  it('TC002: Verify home link exists', () => {
    // Verify home link is present and contains correct text
    homePage.verifyHomeLinksExists();
  });
});
