

# 🧪 Playwright TypeScript Framework

A scalable **Playwright end-to-end testing framework** written in **TypeScript**, designed to help you write, organize, and run reliable automated tests for web applications. It comes with sensible defaults and directory structure so you can focus on writing tests, not setup.

---

## 🚀 Features

✔ Written in **TypeScript** for type safety
✔ Uses **Playwright** test runner for cross-browser automation (Chromium, Firefox, WebKit) ([Playwright][1])
✔ Structured folders for tests, utils, and reporting
✔ Support for browser trace, screenshots, video recording
✔ .env environment management (optional)
✔ Ready for CI/CD like GitHub Actions

---

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aminabousalem21-ai/plawright-typescript-framework.git
   ```

2. **Navigate into the project**

   ```bash
   cd plawright-typescript-framework
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

---

## 📁 Project Structure

```
├── tests/                  # Your test specs
├── pages/                  # Page Object Models (POM)
├── utils/                  # Helper functions and utilities
├── test-results/           # Generated reports and test artifacts
├── playwright.config.ts    # Playwright configuration
├── package.json
├── .gitignore
└── README.md
```

---

## 🧠 Writing Tests

Create your test files under the `tests/` folder. Example:

```ts
// tests/example.spec.ts

import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
```

Playwright automatically finds and runs tests in files matching `*.spec.ts` or `*.test.ts` inside `tests/`.

---

## ▶️ Running Tests

Use npm scripts from your `package.json`:

```bash
# Run all tests in default mode
npm test

# Run tests with report output
npm run test:report

# Run tests in headed mode (show browser UI)
npm run test:headed
```

*(Customize scripts as needed in package.json)*

---

## 🎯 Configuration

Your Playwright options are managed in `playwright.config.ts`, where you can set:

* Base URLs
* Test timeouts
* Reporter types (HTML, JSON, etc.)
* Browser projects
* Trace and video settings

For detailed configuration options, see Playwright documentation. ([Playwright][1])

---

## 🪩 Environment Variables

You can manage test environment settings (like URLs, credentials) using `.env` files. For example:

```
BASE_URL=https://myapp.test
API_KEY=your_key_here
```

Load these configs in your tests or fixtures as needed.

---

## 📊 Reporting

This framework can generate reports with:

* HTML test reports
* Screenshots on failure
* Browser trace files
  These help you debug test failures faster.

---

## 💡 Best Practices

✔ Use **Page Object Model** for scalable test design
✔ Keep tests **small and focused**
✔ Use **fixtures** for test setup/teardown
✔ Use **Playwright’s built-in assertions** for stable verification

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---


