# M006-CYPRESS-TYPESCRIPT

A comprehensive Cypress testing framework with TypeScript and Page Object Model (POM) design pattern.

## Overview

This project demonstrates best practices for E2E testing using:

- **Cypress** - Modern E2E testing framework
- **TypeScript** - Type-safe test code
- **Page Object Model** - Maintainable test architecture
- **Custom Commands** - Reusable test utilities

## Project Structure

```
M006-CYPRESS-TYPESCRIPT/
├── cypress/
│   ├── e2e/                          # Test files
│   │   └── homePage.cy.ts            # HomePage test suite
│   ├── pages/                        # Page Objects
│   │   ├── BasePage.ts               # Base class with common methods
│   │   └── HomePage.ts               # Home page object
│   ├── support/
│   │   ├── commands.d.ts             # Definition for Custom Cypress commands
│   │   ├── commands.ts               # Custom Cypress commands
│   │   ├── constants.ts              # Global constanst for pages
│   │   └── e2e.ts                    # Global configuration
│   └── fixtures/                     # Test data
├── src/                              # Source code (if needed)
├── cypress.config.ts                 # Cypress configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json                      # Project dependencies
└── README.md                          # This file
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project**

   ```bash
   cd "M006-CYPRESS-TYPESCRIPT"
   ```

2. **Install dependencies** (Already done, but for reference)

   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx cypress --version
   ```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)

```bash
npm run cypress:open
```

This opens the Cypress Test Runner where you can:

- Select a test file to run
- View test execution in real-time
- Debug tests step-by-step
- Inspect elements and network requests

### Run Tests in Headless Mode

```bash
npm run cypress:run
```

Executes all tests without opening the browser.

### Run Tests in Specific Browser

```bash
npm run test:chrome          # Run in Chrome
npm run test:firefox        # Run in Firefox
```

### Run Specific Test File

```bash
npm run test:single -- cypress/e2e/login.cy.ts
```

### Run Tests with Browser Visible

```bash
npm run test:headed
```

### Debug Mode

```bash
npm run test:debug
```

Opens Cypress in headed mode for debugging.

## Page Object Model (POM) Pattern

### What is POM?

The Page Object Model is a design pattern that improves test maintainability by:

- Encapsulating page elements and interactions in dedicated classes
- Reducing code duplication
- Making tests more readable and maintainable
- Simplifying updates when UI changes

### How to Use

#### 1. Create a New Page Object

```typescript
import { BasePage } from "./BasePage";

export class MyPage extends BasePage {
  private selectors = {
    button: ".my-button",
    input: ".my-input",
  };

  clickMyButton(): void {
    this.click(this.selectors.button);
  }

  enterText(text: string): void {
    this.type(this.selectors.input, text);
  }
}
```

#### 2. Use in Tests

```typescript
import { MyPage } from "../pages/MyPage";

describe("My Feature", () => {
  const myPage = new MyPage();

  it("should perform an action", () => {
    myPage.clickMyButton();
    myPage.enterText("test data");
  });
});
```

### BasePage Methods

The `BasePage` class provides common methods:

| Method                         | Description          |
| ------------------------------ | -------------------- |
| `visit(url)`                   | Navigate to URL      |
| `getElement(selector)`         | Get a single element |
| `click(selector)`              | Click an element     |
| `type(selector, text)`         | Type text in input   |
| `clear(selector)`              | Clear input field    |
| `isVisible(selector)`          | Check if visible     |
| `containsText(selector, text)` | Verify text content  |
| `getText(selector)`            | Get element text     |
| `waitForElement(selector)`     | Wait for element     |
| `elementExists(selector)`      | Check if exists      |
| `scrollToElement(selector)`    | Scroll to element    |
| `hover(selector)`              | Hover over element   |
| `getUrl()`                     | Get current URL      |
| `urlContains(expectedUrl)`     | Verify URL           |

## Custom Commands

Custom commands are defined in `cypress/support/commands.ts`.

### Available Commands

```typescript
// Login with custom command
cy.login("username", "password");

// Navigate with verification
cy.navigateToURL("/dashboard");

// Wait for loader to disappear
cy.waitForLoader();
```

### Create Custom Commands

Add to `cypress/support/commands.ts`:

```typescript
Cypress.Commands.add("myCommand", (param) => {
  // Implementation
});

declare global {
  namespace Cypress {
    interface Chainable {
      myCommand(param: string): Chainable<void>;
    }
  }
}
```

## Test Examples

### Example 1: Login Test with POM

```typescript
import { LoginPage } from "../pages/LoginPage";

describe("Login", () => {
  const loginPage = new LoginPage();

  it("should login successfully", () => {
    loginPage.navigateToLoginPage();
    loginPage.login("user@example.com", "password");
    // Verify logged in state
  });
});
```

### Example 2: Multiple Page Objects

```typescript
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

describe("User Journey", () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  it("should complete user flow", () => {
    loginPage.navigateToLoginPage();
    loginPage.login("user@example.com", "password");

    dashboardPage.verifyDashboardIsDisplayed();
    dashboardPage.logout();

    loginPage.verifyLoginPageIsDisplayed();
  });
});
```

## Configuration

### Cypress Configuration (cypress.config.ts)

Key settings:

```typescript
export default defineConfig({
  e2e: {
    baseUrl: "https://example.com", // Base URL for tests
    viewportWidth: 1280, // Browser width
    viewportHeight: 720, // Browser height
    defaultCommandTimeout: 5000, // Command timeout (ms)
    pageLoadTimeout: 30000, // Page load timeout (ms)
    video: false, // Record videos
    screenshotOnRunFailure: true, // Screenshot on failure
  },
});
```

### TypeScript Configuration (tsconfig.json)

Configured for:

- ES2020 target
- CommonJS modules
- Strict type checking
- Full Cypress type support

## Best Practices

1. **Page Objects First**

   - Create page objects for each page/component
   - Keep selectors private
   - Provide public methods for interactions

2. **Descriptive Test Names**

   - Use clear, business-focused test names
   - Include test case ID (TC001, TC002, etc.)

3. **Test Independence**

   - Each test should be independent
   - Use `beforeEach` for setup
   - Clean up after tests

4. **Wait Strategies**

   - Use `waitForElement()` for dynamic content
   - Avoid hard waits when possible
   - Leverage Cypress auto-retry

5. **Data Management**

   - Use fixtures for test data
   - Keep sensitive data out of code
   - Use environment variables for configs

6. **Error Handling**
   - Handle expected errors gracefully
   - Log meaningful assertions
   - Use meaningful error messages

## Debugging Tests

### Using Cypress Debugger

```typescript
it("test with debug", () => {
  cy.visit("/");
  cy.pause(); // Pauses test execution
  cy.get(".button").click();
  cy.debug(); // Prints subject to console
});
```

### Using Browser DevTools

```typescript
it("test with devtools", () => {
  cy.visit("/");
  cy.get(".button").click();
  // Press Ctrl+Alt+I in the test window to open DevTools
});
```

### View Logs

```bash
npm run test:debug  # Opens in headed mode for inspection
```

## Useful Links

- [Cypress Official Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [TypeScript in Cypress](https://docs.cypress.io/guides/tooling/typescript-support)
- [Page Object Model Pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)

## Troubleshooting

### Tests Not Finding Elements

1. Verify selectors are correct
2. Wait for elements: `cy.get('.element', { timeout: 10000 })`
3. Check if element exists in DOM

### TypeScript Errors

1. Ensure `tsconfig.json` is correct
2. Run `npx tsc --noEmit` to check for errors
3. Verify types are installed: `npm install --save-dev @types/cypress`

### Timeout Issues

1. Increase timeouts in `cypress.config.ts`
2. Use explicit waits in page objects
3. Check if the application is loading properly

## CI/CD Pipeline

### GitHub Actions Workflow

This project includes automated CI/CD pipeline configured in `.github/workflows/cypress-tests.yml`.

**Workflow Triggers:**

- Push to any branch
- Pull requests to `main` and `develop` branches

**Workflow Steps:**

1. Checkout code
2. Setup Node.js (v18.x and v20.x)
3. Install dependencies
4. TypeScript compilation check
5. Run Cypress tests in headless mode
6. Upload test artifacts on failure (screenshots & videos)
7. Comment test results on pull requests

**Test Results:**

- Screenshots and videos are uploaded as artifacts on test failure
- Pull request comments show test status for each Node.js version
- Workflow status appears in branch protection rules

**Running Locally:**

```bash
# Run tests locally before pushing
npm run cypress:run

# Check TypeScript compilation
npx tsc --noEmit
```

## Contributing

When adding new tests:

1. Create page objects for new pages
2. Extend `BasePage` class
3. Use existing helper methods
4. Follow naming conventions
5. Add JSDoc comments
6. Ensure tests pass locally before pushing
7. CI/CD pipeline will verify on all branches

## License

ISC
