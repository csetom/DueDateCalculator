import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { ArgumentReader } from "./argument-reader";

const { calculateDueDate } = require("./index");
const calculateDueDateMock = calculateDueDate as jest.Mock;

// Mock console.log to track its calls
console.log = jest.fn();

// Mock process.argv to simulate command-line arguments
jest.mock("node:process", () => ({
  argv: ["node", "index.js", "2025-03-10T09:00", "4"],
}));

// jest.mock("./argument-reader");
jest
  .spyOn(ArgumentReader.prototype, "getSubmitDate")
  .mockImplementation(() => new Date("2025-03-10T09:00"));
jest
  .spyOn(ArgumentReader.prototype, "getTurnaroundTimeHours")
  .mockImplementation(() => 4);
describe("calculateDueDate", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it("should call Argument reader function", () => {
    calculateDueDate();
    // expect(ArgumentReader).toHaveBeenCalled();
  });
});
