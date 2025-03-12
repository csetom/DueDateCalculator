import { error } from "node:console";
import { argv } from "node:process";

export class ArgumentReader {
  private dateString: string;
  private hourString: string;
  constructor() {
    this.dateString = argv[2];
    this.hourString = argv[3];
  }
  public getSubmitDate(): Date {
    const submitDate = new Date(this.dateString);
    if (isNaN(submitDate.valueOf()))
      throw new Error("Submit Date is not a Date");
    return submitDate;
  }
  public getTurnaroundTimeHours(): number {
    const turnaroundTimeHours = Number(this.hourString);
    if (isNaN(turnaroundTimeHours))
      throw new Error("Turnaround time is not a Number");
    return turnaroundTimeHours;
  }
}
