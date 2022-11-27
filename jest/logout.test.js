// TEST Logout function clears token from browser storage

import { logout } from "../src/js/api/auth/logout.js";

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

test("if logged out", () => {
  localStorage.setItem("token", 1234);
  logout();
  const token = localStorage.getItem("token");
  expect(token).toBe(null);
});
