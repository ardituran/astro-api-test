import { test, expect } from '@playwright/test';

const BASE_URL = 'https://reqres.in/api';
const API_KEY = 'reqres-free-v1';

// Allowed emails from ReqRes
const ALLOWED_EMAILS = [
  'george.bluth@reqres.in',
  'janet.weaver@reqres.in',
  'emma.wong@reqres.in',
  'eve.holt@reqres.in',
  'charles.morris@reqres.in',
  'tracey.ramos@reqres.in'
];

// Random email picker
const getRandomEmail = () => {
  return ALLOWED_EMAILS[Math.floor(Math.random() * ALLOWED_EMAILS.length)];
};

// TC-API-Req-001: Successfully register
test('POST /api/register - Register user with valid data', async ({ request }) => {
  const email = getRandomEmail();
  
  const response = await request.post(`${BASE_URL}/register`, {
    headers: {
      'x-api-key': API_KEY
    },
    data: {
      email: email,
      password: 'TesterPass@123'
    }
  });

  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('token');
});

// TC-API-Req-002: Fail register missing password
test('POST /api/register - Fail when missing password', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/register`, {
    headers: {
      'x-api-key': API_KEY
    },
    data: {
      email: getRandomEmail()
    }
  });

  expect(response.status()).toBe(400);
});

// TC-API-Req-003: Get user by ID
test('GET /api/users/:id - Retrieve user with valid ID', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/2`, {
    headers: {
      'x-api-key': API_KEY
    }
  });

  expect(response.status()).toBe(200);
  
  const body = await response.json();
  expect(body.data).toHaveProperty('id', 2);
  expect(body.data).toHaveProperty('email');
  expect(body.data).toHaveProperty('first_name');
  expect(body.data).toHaveProperty('last_name');
});

// TC-API-Req-004: Get user not found
test('GET /api/users/:id - Return 404 for invalid ID', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/users/999`, {
    headers: {
      'x-api-key': API_KEY
    }
  });

  expect(response.status()).toBe(404);
});

// TC-API-Req-005: Create user
test('POST /api/users - Create user successfully', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/users`, {
    headers: {
      'x-api-key': API_KEY
    },
    data: {
      name: 'Idris QA',
      job: 'QA Engineer'
    }
  });

  expect(response.status()).toBe(201);
  
  const body = await response.json();
  expect(body).toHaveProperty('name', 'Idris QA');
  expect(body).toHaveProperty('job', 'QA Engineer');
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('createdAt');
});

// TC-API-Req-006: Create user without name
test('POST /api/users - Accept request when missing name', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/users`, {
    headers: {
      'x-api-key': API_KEY
    },
    data: {
      job: 'QA Engineer'
    }
  });

  expect(response.status()).toBe(201);
});

// TC-API-Req-007: Delete user
test('DELETE /api/users/:id - Delete user successfully', async ({ request }) => {
  const response = await request.delete(`${BASE_URL}/users/2`, {
    headers: {
      'x-api-key': API_KEY
    }
  });

  expect(response.status()).toBe(204);
});

// TC-API-Req-008: Delete non-existent user
test('DELETE /api/users/:id - Return 204 for any ID', async ({ request }) => {
  const response = await request.delete(`${BASE_URL}/users/999`, {
    headers: {
      'x-api-key': API_KEY
    }
  });

  expect(response.status()).toBe(204);
});
