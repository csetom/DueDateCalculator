import { describe, expect, it, jest, beforeEach } from "@jest/globals";
import { ArgumentReader } from "./argument-reader";

jest.mock("node:process");

describe("argument-reader", () => {
  jest.mock("node:process", () => ({
    argv: ["node", "index.js", "2025-03-10", "8"],
  }));
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });
  it("argumentReader is defined", () => {
    const argumentReader = new ArgumentReader();
    expect(argumentReader).toBeInstanceOf(ArgumentReader);
  });
  it("argumentReader can give back submitdate", () => {
    const argumentReader = new ArgumentReader();
    expect(argumentReader.getSubmitDate.call).not.toThrowError();
    let submitDate = argumentReader.getSubmitDate();
    expect(submitDate).toBeInstanceOf(Date);
    const date = new Date("2025-03-10");
    expect(submitDate).toBe(date);
  });
  it("Throw unexpected if its not a date", () => {
    jest.mock("node:process", () => ({
      argv: ["node", "index.js", "kutyafule", "8"],
    }));
    const argumentReader = new ArgumentReader();
    expect(argumentReader.getSubmitDate.call).toThrowError();
  });
});
