import { ScrollBarPage } from '../pages/ScrollBarPage';

describe('Scroll Bars Page Feature - POM Pattern Example', () => {
    // Instantiate page object
    const scrollBarPage = new ScrollBarPage();

    beforeEach(() => {
    // Navigate to scroll bars page before each test
    scrollBarPage.navigateToScrollBars();
    });

    it('TC001: Look for hidden button by scrolling', () => {
    scrollBarPage.lookForHiddenButton();
    });
});