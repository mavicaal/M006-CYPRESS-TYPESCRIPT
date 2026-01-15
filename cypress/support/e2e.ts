// Support file - Add custom commands and configuration here
import './commands';

// Hide fetch/XHR requests in command log
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');
  app.document.head.appendChild(style);
}

// Global error handling
// @ts-expect-error - Cypress namespace is available at runtime
Cypress.on(
  'uncaught:exception',
  (err: Error, runnable: any) => {
    // Return false to prevent Cypress from failing the test
    // Uncomment below to ignore specific errors
    // return false;
    return true;
  }
);
