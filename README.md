# Copilot Calculator

Minimal Node.js calculator demonstrating async arithmetic functions and a small CLI wrapper.

## What this repo contains
- calculator.js — async add, subtract, multiply, divide functions
- index.js — CLI example and command-line wrapper
- __tests__/calculator.test.js — Jest tests

## Requirements
- Node.js (recommended v16+)
- npm (bundled with Node.js)

## Setup
1. Clone the repo and change directory:
   git clone <repo-url>
   cd copilot-calculator

2. Install dependencies (none are listed in package.json, but install dev tooling for tests):
   npm install
   npm install --save-dev jest

## Run the CLI
- Show built-in examples and/or run an operation:
  node index.js
  node index.js add 2 3
  node index.js multiply 6 7

## Use as a module
Calculator functions are async. Example:

```js
const calculator = require('./calculator');

(async () => {
  const sum = await calculator.add(2, 3);
  console.log(sum); // 5
})();
```

## Tests
Run tests with Jest:

  npm test

If `npm test` fails because Jest is not installed, run:

  npm install --save-dev jest
  npx jest

Note: tests expect async functions and assert behavior (including division-by-zero rejection).

## Contributing
PRs and issues welcome. Keep changes small and add tests for new behavior.

## License
Add or update a LICENSE file for the chosen license.

---

If you want the README adjusted (node version, add badges, or include CI setup), say what to include and it will be updated.