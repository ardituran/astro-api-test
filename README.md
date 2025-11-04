# API Test Automation - ReqRes API

Automated API testing suite for ReqRes API endpoints using Playwright framework.

## Project Overview

This project contains automated test scripts for **Task 2** of the QA technical interview. It tests various API endpoints including user registration, CRUD operations, and error handling scenarios.

## Tech Stack

- **Framework:** Playwright Test
- **Language:** JavaScript (ES6+)
- **API Under Test:** ReqRes API (https://reqres.in)
- **Node Version:** v22.15.0
- **npm Version:** v10.9.2

## Project Structure

```

astro-api-test/
├── tests/
│   └── astro-api.test.js    \# Main test suite (8 test cases)
├── node_modules/             \# Dependencies
├── package.json              \# Project configuration
├── package-lock.json         \# Dependency lock file
└── README.md                 \# This file

```

## Test Coverage

The test suite covers 8 API test scenarios:

| Test Case | Method | Endpoint | Scenario |
|-----------|--------|----------|----------|
| TC-API-Req-001 | POST | /api/register | Register with valid credentials |
| TC-API-Req-002 | POST | /api/register | Register with missing password |
| TC-API-Req-003 | GET | /api/users/:id | Retrieve user by valid ID |
| TC-API-Req-004 | GET | /api/users/:id | Retrieve user with invalid ID |
| TC-API-Req-005 | POST | /api/users | Create user successfully |
| TC-API-Req-006 | POST | /api/users | Create user with missing field |
| TC-API-Req-007 | DELETE | /api/users/:id | Delete user successfully |
| TC-API-Req-008 | DELETE | /api/users/:id | Delete non-existent user |

## Prerequisites

Ensure you have the following installed:
- Node.js (v22 or higher)
- npm (v10 or higher)

## Installation

1. Navigate to project directory:
```

cd astro-api-test

```

2. Install dependencies:
```

npm install

```

## Running Tests

Execute all tests:
```

npx playwright test

```

Run tests with detailed output:
```

npx playwright test --reporter=list

```

Run specific test file:
```

npx playwright test tests/astro-api.test.js

```

## Test Results

Latest test run: **8 passed (100% success rate)**

```

✓ POST /api/register - Register user with valid data
✓ POST /api/register - Fail when missing password
✓ GET /api/users/:id - Retrieve user with valid ID
✓ GET /api/users/:id - Return 404 for invalid ID
✓ POST /api/users - Create user successfully
✓ POST /api/users - Accept request when missing name
✓ DELETE /api/users/:id - Delete user successfully
✓ DELETE /api/users/:id - Return 204 for any ID

```

## Key Features

- **Dynamic Test Data:** Random email selection from whitelisted ReqRes accounts
- **API Key Management:** Centralized API key configuration
- **Comprehensive Assertions:** Status code validation and response body checks
- **Real-world Adaptation:** Test expectations adjusted based on actual API behavior
- **Clean Code:** Minimal comments, readable structure, professional practices

## Notes

- All tests use the ReqRes free tier API key: `reqres-free-v1`
- Register endpoint only accepts specific whitelisted email addresses
- Some API behaviors differ from standard REST conventions (e.g., DELETE always returns 204)

## Author

Created for Astro QA Technical Interview - Task 2