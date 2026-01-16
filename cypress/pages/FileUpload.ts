import { BasePage } from "./BasePage";

export class FileUploadPage extends BasePage {
    // Page selectors
    private selectors = {
        fileInput: 'input#browse',
        browseButton: 'label.browse-btn',
        successMessage: '.success-file',
    }

    /**
     * Navigate to file upload page
     */
    navigateToFileUpload(): void {
      cy.navigateToURL('/upload');
    }

    /**
     * Upload file via drag and drop
     * @param filePath - Path to the file relative to fixtures folder
     */
    protected uploadFileByDragDrop(filePath: string): void {
      cy.get(this.selectors.fileInput).attachFile(filePath, { subjectType: 'drag-n-drop' });
    }

    /**
     * Upload file via browse button (click file input)
     * @param filePath - Path to the file relative to fixtures folder
     */
    protected uploadFileByBrowse(filePath: string): void {
      cy.get(this.selectors.fileInput).attachFile(filePath);
    }

    /**
     * Upload via drag and drop and verify success
     * @param filePath - Path to the file
     * @param expectedMessage - Expected upload success message
     */
    uploadFileAndVerifyDragDrop(filePath: string, expectedMessage: string): void {
      this.uploadFileByDragDrop(filePath);
      this.getText(this.selectors.successMessage).should('contain', expectedMessage);
    }

    /**
     * Upload via browse button and verify success
     * @param filePath - Path to the file
     * @param expectedMessage - Expected upload success message
     */
    uploadFileAndVerifyBrowse(filePath: string, expectedMessage: string): void {
      this.uploadFileByBrowse(filePath);
      this.getText(this.selectors.successMessage).should('contain', expectedMessage);
    }

}