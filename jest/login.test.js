// TEST Login function returns valid token with valid credentials

import { login } from "../src/js/api/auth/login.js";

const testEmail = "test@noroff.no";
const testPassword = "1234";
const expectedToken = "Auth1234";

// mock success fetch function
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(expectedToken),
  });
}

// mock fail fetch function
function fetchFail() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Invalid Login",
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
  const response = await login(testEmail, testPassword);
  expect(response).toEqual(expectedToken);
});

test("Throws error when provided with a invalid login", async () => {
  global.fetch = jest.fn(() => fetchFail());
  await expect(() => login(testEmail, testPassword)).rejects.toThrow(
    "Invalid Login"
  );
});
