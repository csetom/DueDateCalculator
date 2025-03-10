import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { ArgumentReader } from "./argument-reader";

const { calculateDueDate } = require("./index");
const calculateDueDateMock = calculateDueDate as jest.Mock;

// Mock console.log to track its calls
console.log = jest.fn();

// Mock process.argv to simulate command-line arguments
// jest.mock("node:process", () => ({
//   argv: ["node", "script.js", "arg1", "arg2"],
// }));

jest.mock("./argument-reader");

describe("calculateDueDate", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("should call Argument reader function", () => {
    calculateDueDate();
    expect(ArgumentReader).toHaveBeenCalled();
  });
});
