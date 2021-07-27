const { lookup } = require(".");
const faker = require("faker");
const axios = require("axios");

jest.mock("axios");

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

test("should return error if invalid input", async () => {
  let err;
  try {
    await lookup("", "spf", faker.datatype.uuid());
  } catch (error) {
    err = error;
  }
  await expect(err.message).toBe("Bad request");
});

test("should return error if api returns error", async () => {
  axios.get.mockImplementation(() => Promise.reject("Bad request"));

  let err;
  try {
    await lookup(faker.internet.url(), "spf", faker.datatype.uuid());
  } catch (error) {
    err = error;
  }

  expect(err.message).toBe("Bad request");
});
