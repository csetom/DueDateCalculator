import { describe, expect, it, beforeEach } from "@jest/globals";
import { ArgumentReader } from "./argument-reader";

// Mock process.argv at the module level
jest.mock("node:process", () => ({
  argv: ["node", "index.js", "2025-03-10", "8"], // Default mock value
}));
const processModule = require("node:process");
describe("argument-reader", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("argumentReader is defined", () => {
    const argumentReader = new ArgumentReader();
    expect(argumentReader).toBeInstanceOf(ArgumentReader);
  });

  it("argumentReader can give back submitDate", () => {
    // Override the mock for this specific test
    processModule.argv = ["node", "index.js", "2025-03-10", "8"];

    const argumentReader = new ArgumentReader();
    let submitDate;
    expect(
      () => (submitDate = argumentReader.getSubmitDate())
    ).not.toThrowError();
    expect(submitDate).toBeInstanceOf(Date);

    const expectedDate = new Date("2025-03-10");
    expect(submitDate).toEqual(expectedDate);
  });

  it("Throw unexpected if it's not a date", () => {
    // Override the mock for this specific test
    processModule.argv = ["node", "index.js", "kutyafule", "8"];

    const argumentReader = new ArgumentReader();
    expect(() => argumentReader.getSubmitDate()).toThrowError();
  });
});
