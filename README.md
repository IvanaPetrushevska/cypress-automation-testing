# Cypress Automation Testing
A project demonstrating end-to-end testing with Cypress for a web application, including UI and functional tests. Developed with guidance from a Udemy course.

## Features

- **End-to-End Testing**: Tests for user interactions and functionality.
- **Page Object Model**: Organized test code.
- **Custom Commands**: Reusable commands for actions.
- **Mochawesome Reporting**: Integrated test result reporting.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IvanaPetrushevska/cypress-automation-testing.git
2. **Navigate to the project directory:**
   ```bash
   cd cypress-automation-testing
3. **Install dependencies:**
   ```bash
   npm install
4. **Run tests using:**
   ```bash
   npx cypress open
5. **Generate HTML reports from JSON:**
   ```bash
    npx mochawesome-merge cypress/reports/*.json > cypress/reports/mochawesome.json
    npx marge cypress/reports/mochawesome.json -o cypress/reports/mochawesome.html
## Project Structure
- **cypress/integration/**: Contains test files.
- **cypress/support/**: Contains support files and custom commands.
- **cypress/reports/**: Contains test reports.
## Contributing
 Contributions are welcome through issues or pull requests.