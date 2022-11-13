// TEST if create item creates new item on api

import { createPost } from "../src/js/api/posts/create.js";

const mockTitle = "Test Title";
const mockBody = "Test Body";
const mockMedia = "www.testmedia.com/test.png";
const mockTags = ["test", "test2"];

// mock success fetch function
function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve({ mockTitle, mockBody, mockMedia, mockTags }),
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

test("item is created", async () => {
  global.fetch = jest.fn(() => fetchSuccess());
  const receivedPostItems = await createPost(
    mockTitle,
    mockBody,
    mockMedia,
    mockTags
  );
  expect(receivedPostItems).toEqual({
    mockTitle,
    mockBody,
    mockMedia,
    mockTags,
  });
});
