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
    it("15:35, turnaroundtime = 9 hours ==> +1 day +1 hour ", () => {
      const submitDate = new Date("2025-03-10T15:35");
      const turnaroundTimeHours = 9;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-11T16:35");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("start of the day, turnaroundtime = 0.5 hours ", () => {
      const submitDate = new Date("2025-03-10T09:00");
      const turnaroundTimeHours = 0.5;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-10T09:30");
      expect(dueDate).toStrictEqual(expectedDate);
    });

    it("Midle of the week, turnaroundtime = 1 hours ", () => {
      const submitDate = new Date("2025-03-13T09:00");
      const turnaroundTimeHours = 1;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-13T10:00");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("Next week, turnaroundTime = 40 hours", () => {
      const submitDate = new Date("2025-03-10T09:00");
      const turnaroundTimeHours = 40;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-17T09:00");
      expect(dueDate).toStrictEqual(expectedDate);
    });

    it("Next week, midle of the week,  turnaroundTime = 45 hours", () => {
      const submitDate = new Date("2025-03-11T10:00");
      const turnaroundTimeHours = 45;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-18T15:00");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("End of the day, midle of the week,  turnaroundTime = 1 hours", () => {
      const submitDate = new Date("2025-03-11T16:30");
      const turnaroundTimeHours = 1;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-12T09:30");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("End of the day, end of the week,  turnaroundTime = 1 hours", () => {
      const submitDate = new Date("2025-03-14T16:30");
      const turnaroundTimeHours = 1;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-17T09:30");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("Middle of the week, end of the day, turnaroundTime = 1 week 2 day and 2 hours (which cause to bump to 3 day) = 58 hour ", () => {
      const submitDate = new Date("2025-03-11T16:30");
      const turnaroundTimeHours = 58;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-21T10:30");
      expect(dueDate).toStrictEqual(expectedDate);
    });
    it("Half turnaround time, turnaround time 30 minutes ", () => {
      const submitDate = new Date("2025-03-11T16:29");
      const turnaroundTimeHours = 0.5;
      let dueDateCalculator = new DueDateCalculator(submitDate);

      expect(dueDateCalculator).toBeInstanceOf(DueDateCalculator);
      const dueDate = dueDateCalculator.addTurnaround(turnaroundTimeHours);
      expect(dueDate).toBeInstanceOf(Date);
      const expectedDate = new Date("2025-03-11T16:59");
      expect(dueDate).toStrictEqual(expectedDate);
    });
  });
});
