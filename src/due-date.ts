export class DueDateCalculator {
  private submitDate: Date;
  private workStart = 9;
  private workStartMinute = 0;
  constructor(submitDate: Date) {
    if (isNaN(submitDate.valueOf()))
      throw new Error("SubmitDate is not a valide Date");
    // Here we could also check if it is a valide work day and time.
    this.submitDate = submitDate;
    console.log(submitDate);
  }
  private addHours(date: Date, hours: number) {
    console.log("date:", date, "hours", hours);
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    console.log("date:", date);
    return date;
  }
  private initDueStartOfDay() {
    const dueDateStartOfDay = new Date(this.submitDate);
    dueDateStartOfDay.setHours(this.workStart);
    dueDateStartOfDay.setMinutes(this.workStartMinute);
    return dueDateStartOfDay;
  }
  public addTurnaround(turnaroundHours: number): Date {
    const actualHour =
      this.submitDate.getHours() + this.submitDate.getMinutes() / 60;
    // We know, that the submitDate's hour is valid.
    const hoursFromTheStartOfTheDay = actualHour - this.workStart;
    const turnaroundHoursFromTheStartOfTheDay =
      turnaroundHours + hoursFromTheStartOfTheDay;
    const dueDateStartOfDay = this.initDueStartOfDay();
    const workingHours = turnaroundHoursFromTheStartOfTheDay % 8;
    const workingDays = Math.floor(turnaroundHoursFromTheStartOfTheDay / 8);
    const actualTimeInHours = workingHours + workingDays * 24;
    const dueDate = this.addHours(dueDateStartOfDay, actualTimeInHours);

    return dueDate;
  }
}
