import { AjaxDataPage } from "../pages/AjaxDataPage";

describe('Ajax Data Page Feature - POM Pattern Example', () => {
    // Instantiate page object
    const ajaxDataPage = new AjaxDataPage();

    beforeEach(() => {
        // Navigate to ajax data page before each test
        ajaxDataPage.navigateToAjaxData();
    });

    it('TC001: Verify ajax data is loaded after button click', () => {
        // Click ajax button
        ajaxDataPage.clickAjaxButton();
        // Verify ajax data text is visible
        ajaxDataPage.getAjaxDataText();
    }); 
});