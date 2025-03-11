export class DueDateCalculator {
  private submitDate: Date;
  private workStart = 9;
  constructor(submitDate: Date) {
    if (isNaN(submitDate.valueOf()))
      throw new Error("SubmitDate is not a valide Date");
    // Here we could also check if it is a valide work day and time.
    this.submitDate = submitDate;
    console.log(submitDate);
  }
  private addHours(date: Date, hours: number) {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    return date;
  }
  public addTurnaround(turnaroundHours: number): Date {
    const realHours = this.submitDate.getHours();
    // const calculatedHours = realHours - this.workStart;
    let dueDate = new Date(this.submitDate);
    console.log("dueDate", dueDate);
    dueDate = this.addHours(dueDate, turnaroundHours);
    console.log("dueDate", dueDate);
    return dueDate;
  }
}
