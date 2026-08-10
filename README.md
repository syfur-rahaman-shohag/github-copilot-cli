## Overview

This repository demonstrates a complete workflow using the [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli), including project initialization, code generation for a basic CLI calculator, automated issue management, unit testing, and pull request workflows.

## Features

- **CLI-Assisted Development:** Generate, refactor, and edit Node.js code directly from the terminal.
- **Calculator Functionality:** Core mathematical operations (addition, subtraction, multiplication, and division).
- **Issue & PR Automation:** Create, list, review, and summarize GitHub issues and pull requests using Copilot commands.
- **Testing & Debugging Assistance:** AI-assisted unit test generation and interactive debugging support.

### Technologies Used

* **Runtime Environment:** [Node.js](https://nodejs.org/) (v22+ required)
* **CLI Engine:** [GitHub Copilot CLI](https://github.com/github/copilot-cli) (`@github/copilot` / `@githubnext/copilot-cli`)
* **Version Control & Management:** [Git](https://git-scm.com/) and [GitHub CLI](https://cli.github.com/) (`gh`)
* **Testing Framework:** [Jest](https://jestjs.io/) (for automated unit testing)

## Installation

1. **Install Copilot CLI globally:**

```bash
npm install -g @githubnext/copilot-cli
```

## If npm installation fails, you can install via WinGet:
```bash
winget install --id GitHub.cli
```
2. **Verify installation:**
```bash
copilot --version
```

**Running the Application**
Execute the calculator locally:
```bash
node calculator.js
```

**Copilot CLI Commands**
Generate or Refactor Code:
```bash
copilot code "Create a Node.js calculator with add, subtract, multiply, divide functions"
copilot code "Refactor calculator.js to use async functions"
```
**Message Issues:**
```bash
copilot issue create "Add calculator functionality"
copilot issue list
```

**Manage Pull Requests:**
```bash
copilot pr create
copilot pr review
```
**Generate Tests:**
```bash
copilot code "Write Jest tests for calculator.js"
```
## Contributing

To contribute:

1. Fork the repository.
2. Create a branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Contact

For questions or suggestions, please contact:

- **Name**: Syfur Rahaman Shohag
- **Email**: [syfur.srs@gmail.com](mailto:syfur.srs@gmail.com)
- **GitHub**: [https://github.com/syfur-rahaman-shohag](https://github.com/syfur-rahaman-shohag)
