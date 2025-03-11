import { describe, expect, it, beforeEach } from "@jest/globals";
import { DueDateCalculator } from "./due-date";
const processModule = require("node:process");
describe("due-date", () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });
  describe("DueDate class", () => {
    it("Class is exists", () => {
      const submitDate = new Date("2025-03-10T08:00");
      let dueDateCalculator;
      expect(
        () => (dueDateCalculator = new DueDateCalculator(submitDate))
      ).not.toThrowError();
      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
    });
    it("Class throw error if Date is non", () => {
      const submitDate = new Date("kutyafule");
      let dueDateCalculator;
      expect(
        () => (dueDateCalculator = new DueDateCalculator(submitDate))
      ).toThrowError();
    });
    it("Start of the day, turnaroundtime = 3 hours", () => {
      const submitDate = new Date("2025-03-10T09:00");
      const turnaroundTimeHours = 3;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-10T12:00");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("11 o' clock,turnaroundtime = 3 hours ", () => {
      const submitDate = new Date("2025-03-10T11:00");
      const turnaroundTimeHours = 3;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-10T14:00");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("11:30, clock,turnaroundtime = 3 hours ", () => {
      const submitDate = new Date("2025-03-10T11:30");
      const turnaroundTimeHours = 3;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-10T14:30");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("start of the day, turnaroundtime = 8 hours ==> +1 day ", () => {
      const submitDate = new Date("2025-03-10T09:00");
      const turnaroundTimeHours = 8;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-11T09:00");
      expect(dueDate).toStrictEqual(expectedDate);
    });
  });
});
