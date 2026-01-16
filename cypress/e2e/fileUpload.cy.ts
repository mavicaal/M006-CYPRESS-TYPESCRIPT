import { FileUploadPage } from "../pages/FileUpload";

describe('File Upload Page Feature', () => {
    // Instantiate page object
    const fileUploadPage = new FileUploadPage();

    beforeEach(() => {
        // Navigate to file upload page before each test
        fileUploadPage.navigateToFileUpload();
    });

    it('TC001: Verify file upload via drag and drop', () => {
        cy.fixture('fileUploadData').then((data) => {
            fileUploadPage.uploadFileAndVerifyDragDrop(data.filePath, data.expectedMessage);
        });
    });

    it('TC002: Verify file upload via file selection', () => {
        cy.fixture('fileUploadData').then((data) => {
            fileUploadPage.uploadFileAndVerifyBrowse(data.filePath, data.expectedMessage);
        });
    });
});