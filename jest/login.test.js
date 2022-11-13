// TEST Login function returns valid token with valid credentials

import { login } from "../src/js/api/auth/login.js";

const TEST_EMAIL = "test@noroff.no";
const TEST_PASSWORD = "1234";
const TEST_TOKEN = "Auth1234";

// mock success fetch function
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_TOKEN),
  });
}

// mock localstorage

class LocalStorageMock {
  constructor() {
    this.value = {};
  }

  clear() {
    this.value = {};
  }

  getItem(token) {
    return this.value[token] || null;
  }

  setItem(token, value) {
    this.value[token] = String(value);
  }

  removeItem(token) {
    delete this.value[token];
  }
}

global.localStorage = new LocalStorageMock();

test("Returns a valid auth token when provided with a valid login", async () => {
  global.fetch = jest.fn(() => fetchSuccess());
  const token = await login(TEST_EMAIL, TEST_PASSWORD);
  expect(token).toEqual(TEST_TOKEN);
});
