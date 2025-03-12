import { ArgumentReader } from "./argument-reader";
import { DueDateCalculator } from "./due-date";

export function calculateDueDate() {
  const argumentReader = new ArgumentReader();
  const submitDate = argumentReader.getSubmitDate();
  const turnaroundHours = argumentReader.getTurnaroundTimeHours();
  const dueDateCalculator = new DueDateCalculator(submitDate);
  const dueDate = dueDateCalculator.addTurnaround(turnaroundHours);
  console.log(dueDate);
}

calculateDueDate();
