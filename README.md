# API Test Automation - ASTRO Technical Assessment

**Task 2**: API Testing & Automation using Playwright

**Test Documentation**: [View Test Cases](https://docs.google.com/spreadsheets/d/17hypZCKrcWnpcnHRAiMbF0rXruYk_q3cbDmUgESGJZc/edit?usp=sharing)

---

## 📋 Overview

This project demonstrates automated API testing for the ReqRes REST API using Playwright framework. The test suite covers 15 comprehensive scenarios including positive, negative, and edge cases across all CRUD operations.

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
│   └── astro-api.test.js    \# Main test suite (15 test cases)
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

### Run specific test file
```

npx playwright test tests/astro-api.test.js

```

### Run specific test file with HTML report
```

npx playwright test tests/astro-api.test.js --reporter=html

```

### View Report
```

npx playwright show-report

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
| 9 | TC-API-Req-009 | /api/register | POST | Register with non-whitelisted email | ✅ Pass |
| 10 | TC-API-Req-010 | /api/users | POST | Create user with empty body | ✅ Pass |
| 11 | TC-API-Req-011 | /api/login | POST | Login with valid credentials | ✅ Pass |
| 12 | TC-API-Req-012 | /api/login | POST | Login without password | ✅ Pass |
| 13 | TC-API-Req-013 | /api/users/12 | PUT | Update user with valid data | ✅ Pass |
| 14 | TC-API-Req-014 | /api/users/999 | PUT | Update non-existent user (empty body) | ✅ Pass |
| 15 | TC-API-Req-015 | /api/login | POST | Login with empty body | ✅ Pass |

**Test Results**: 15/15 passed (100% pass rate)

---

## 🔑 Key Features

- **Complete CRUD Coverage**: Create, Read, Update, Delete operations
- **Full HTTP Method Coverage**: GET, POST, PUT, DELETE
- **Dynamic Test Data**: Random email selection from allowed list
- **API Authentication**: Uses ReqRes API key (`reqres-free-v1`)
- **Comprehensive Assertions**: Validates status codes, response body, and error messages
- **Positive & Negative Scenarios**: Tests both success and error cases
- **Edge Case Testing**: Validates boundary conditions and error handling
- **Login & Authentication Flow**: Tests user authentication endpoints
- **Data Update Operations**: PUT method testing with valid and non-existent resources
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
- Error message content
- Timestamp fields (createdAt, updatedAt)

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