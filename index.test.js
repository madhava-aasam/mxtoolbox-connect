const { lookup } = require(".");
const faker = require("faker");
const axios = require("axios");

jest.mock("axios");

test("should return error if invalid input", async () => {
  const result = await lookup("", "spf", faker.datatype.uuid());

  expect(result.error_code).toBe(400);
});

test("should return valid result", async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({ status: 200, data: { resp: true } })
  );

  const result = await lookup(
    faker.internet.url(),
    "spf",
    faker.datatype.uuid()
  );

  expect(result).toEqual({ resp: true });
});

test("should return error if api returns error", async () => {
  axios.get.mockImplementation(() =>
    Promise.reject({ response: { status: 400, statusText: "Bad request" } })
  );

  const result = await lookup(
    faker.internet.url(),
    "spf",
    faker.datatype.uuid()
  );

  expect(result).toEqual({ error_code: 400, message: "Bad request" });
});
