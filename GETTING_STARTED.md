# Getting Started with Cypress TypeScript Framework

## Quick Start Guide

### 1. Open Cypress Test Runner

```bash
npm run cypress:open
```

This opens the interactive Cypress Test Runner where you can:

- See all available tests
- Run tests individually or all at once
- View test execution in real-time
- Debug tests step-by-step

### 2. Run Tests Headless (CI/CD)

```bash
npm run cypress:run
```

Executes all tests without opening the browser.

### 3. Run Specific Test File

```bash
npm run test:single -- cypress/e2e/login.cy.ts
```

### 4. Debug a Test

```bash
npm run test:debug
```

Opens in headed mode with full debugging capabilities.

## File Organization

```
cypress/
├── e2e/
│   ├── login.cy.ts         - Login/Authentication tests
│   └── products.cy.ts      - Product management tests
├── pages/
│   ├── BasePage.ts         - Base class with reusable methods
│   ├── LoginPage.ts        - Login page object
│   ├── DashboardPage.ts    - Dashboard page object
│   └── ProductListPage.ts  - Product list page object
├── support/
│   ├── commands.ts         - Custom Cypress commands
│   └── e2e.ts              - Global configuration
└── fixtures/               - Test data files
```

## Creating New Tests

### Step 1: Create a Page Object

```typescript
import { BasePage } from "./BasePage";

export class MyNewPage extends BasePage {
  private selectors = {
    button: ".my-button",
    input: ".my-input",
  };

  clickButton(): void {
    this.click(this.selectors.button);
  }

  enterValue(value: string): void {
    this.type(this.selectors.input, value);
  }
}
```

### Step 2: Create a Test File

```typescript
import { MyNewPage } from "../pages/MyNewPage";

describe("My Feature Suite", () => {
  const myPage = new MyNewPage();

  beforeEach(() => {
    myPage.navigateTo("/my-page");
  });

  it("should perform action", () => {
    myPage.clickButton();
    myPage.enterValue("test");
    // Add assertions
  });
});
```

## Page Object Model Benefits

1. **Maintainability**: Changes to UI are made in one place (the page object)
2. **Readability**: Tests read like business scenarios
3. **Reusability**: Page methods can be used across multiple tests
4. **Scalability**: Easy to add new pages and tests

## Common BasePage Methods

| Method                         | Usage               |
| ------------------------------ | ------------------- |
| `click(selector)`              | Click an element    |
| `type(selector, text)`         | Type text in input  |
| `getText(selector)`            | Get element text    |
| `isVisible(selector)`          | Check visibility    |
| `waitForElement(selector)`     | Wait for element    |
| `containsText(selector, text)` | Verify text content |
| `navigateTo(path)`             | Navigate to path    |

## Best Practices

1. **Keep Selectors Private**: Use private selectors object
2. **Meaningful Method Names**: Methods should describe the action
3. **Single Responsibility**: Each method should do one thing
4. **Use Custom Commands**: For repeated actions across pages
5. **Wait Properly**: Use Cypress waits, not hard waits
6. **Test Independence**: Each test should be independent

## Example Test Scenarios

### Login Flow

```typescript
const loginPage = new LoginPage();
loginPage.navigateToLoginPage();
loginPage.login("user@example.com", "password123");
loginPage.verifyLoginSuccess();
```

### Product Management

```typescript
const productPage = new ProductListPage();
productPage.navigateToProductList();
productPage.searchProduct("Laptop");
productPage.verifyProductExists("Laptop");
productPage.editProduct(1);
```

## Debugging Tips

1. **Use `cy.pause()`** to pause execution
2. **Use `cy.debug()`** to print values to console
3. **Open DevTools** (Ctrl+Alt+I) while test is running
4. **Check Cypress Command Log** for step-by-step execution
5. **Use `--headed` flag** to see browser in action

## Running Tests in Different Browsers

```bash
npm run test:chrome      # Chrome
npm run test:firefox     # Firefox
npm run test:headed      # Chrome with browser visible
```

## Next Steps

1. Review existing test files in `cypress/e2e/`
2. Study the page objects in `cypress/pages/`
3. Create your first page object
4. Write your first test
5. Run tests with `npm run cypress:open`

## Useful Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Page Object Model Pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)
- [TypeScript in Cypress](https://docs.cypress.io/guides/tooling/typescript-support)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)

---

**Happy Testing! 🚀**
