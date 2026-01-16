import { DisabledInputPage } from "../pages/DisabledInputPage";

describe('Disabled Input Page Feature', () => {
    // Instantiate page object
    const disabledInputPage = new DisabledInputPage();

    beforeEach(() => {
        disabledInputPage.navigateToDisabledInput();
    });

    it('TC001: Verify input is enabled and can be typed into', () => {
        cy.fixture('disabledInput').then((data) => {
            disabledInputPage.enableInputField();
            disabledInputPage.validateInputFieldText(data.testText, data.expectedMessage);
        });
    });
});