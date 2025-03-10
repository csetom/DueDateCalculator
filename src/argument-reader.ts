import { error } from "node:console";
import { argv } from "node:process";

export class ArgumentReader {
  private dateString: string;
  private hourString: string;
  // private turnaroundTimeHours: Number;
  constructor() {
    this.dateString = argv[2];
    this.hourString = argv[3];
    console.log("argv", argv);
  }
  public getSubmitDate(): Date {
    const submitDate = new Date(this.dateString);
    if (isNaN(submitDate.valueOf()))
      throw new Error("Submit Date is not a Date");
    return submitDate;
  }
}
