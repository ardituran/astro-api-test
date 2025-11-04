# API Test Automation - ASTRO Technical Assessment

**Task 2**: API Testing & Automation using Playwright

**Test Documentation**: [View Test Cases](https://docs.google.com/spreadsheets/d/17hypZCKrcWnpcnHRAiMbF0rXruYk_q3cbDmUgESGJZc/edit?usp=sharing)

---

## 📋 Overview

This project demonstrates automated API testing for the ReqRes REST API using Playwright framework. The test suite covers 8 comprehensive scenarios including positive, negative, and edge cases.

**Base API**: `https://reqres.in/api`

---

## 🛠 Tech Stack

- **Framework**: Playwright v1.x
- **Language**: JavaScript
- **Runtime**: Node.js v22.15.0
- **Package Manager**: npm v10.9.2

---

## 📂 Project Structure

```

astro-api-test/
├── tests/
│   └── astro-api.test.js    \# Main test suite (8 test cases)
├── node_modules/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Git

### Installation

```


# Clone the repository

git clone https://github.com/ardituran/astro-api-test.git

# Navigate to project directory

cd astro-api-test

# Install dependencies

npm install

```

---

## 🧪 Running Tests

### Run all tests
```

npx playwright test

```

### Run tests in UI mode (interactive)
```

npx playwright test --ui

```

### Run specific test file
```

npx playwright test tests/astro-api.test.js

```

### View test report
```

npx playwright show-report

```

### Run with verbose output
```

npx playwright test --reporter=list

```

---

## 📊 Test Coverage

| # | Test Case ID | Endpoint | Method | Scenario | Status |
|---|--------------|----------|--------|----------|--------|
| 1 | TC-API-Req-001 | /api/register | POST | Register with valid credentials | ✅ Pass |
| 2 | TC-API-Req-002 | /api/register | POST | Register without password (error) | ✅ Pass |
| 3 | TC-API-Req-003 | /api/users/2 | GET | Retrieve user by valid ID | ✅ Pass |
| 4 | TC-API-Req-004 | /api/users/999 | GET | Retrieve non-existent user (404) | ✅ Pass |
| 5 | TC-API-Req-005 | /api/users | POST | Create new user | ✅ Pass |
| 6 | TC-API-Req-006 | /api/users | POST | Create user with missing field | ✅ Pass |
| 7 | TC-API-Req-007 | /api/users/2 | DELETE | Delete user by ID | ✅ Pass |
| 8 | TC-API-Req-008 | /api/users/999 | DELETE | Delete non-existent user | ✅ Pass |

**Test Results**: 8/8 passed (100% pass rate)

---

## 🔑 Key Features

- **Dynamic Test Data**: Random email selection from allowed list
- **API Authentication**: Uses ReqRes API key (`reqres-free-v1`)
- **Comprehensive Assertions**: Validates status codes and response body
- **Positive & Negative Scenarios**: Tests both success and error cases
- **Clean Code Structure**: Follows best practices for maintainability

---

## 📝 Test Implementation Details

### Authentication
All requests include API key header:
```

headers: {
'x-api-key': 'reqres-free-v1'
}

```

### Test Data
Allowed test emails (randomly selected per test):
- george.bluth@reqres.in
- janet.weaver@reqres.in
- emma.wong@reqres.in
- eve.holt@reqres.in
- charles.morris@reqres.in
- tracey.ramos@reqres.in

### Assertions
Each test validates:
- HTTP status codes (200, 201, 204, 400, 404)
- Response body structure
- Required fields presence
- Data type validation

---

## 📄 Test Documentation

Full test case details including input data, expected responses, and test scenarios are available in the [Test Case Spreadsheet](https://docs.google.com/spreadsheets/d/17hypZCKrcWnpcnHRAiMbF0rXruYk_q3cbDmUgESGJZc/edit?usp=sharing).

---

## 👨‍💻 Author

**Idris Ardi**  
GitHub: [@ardituran](https://github.com/ardituran)

---

## 📄 License

MIT License - This project is for ASTRO technical assessment purposes.

---

**Created for ASTRO QA Technical Assessment - Task 2**