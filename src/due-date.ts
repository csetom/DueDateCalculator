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
  private getDaySinceMonday(): number {
    // This can be a litle tricky if the start day is not monday, because the getDay() is from sunday to saturday, and its a 0-6 number.
    const monday = 1;
    const daySinceMonday = this.submitDate.getDay() - monday;
    return daySinceMonday;
  }

  private initDueStartOfWeek(): Date {
    const daySinceMonday = this.getDaySinceMonday();
    const dueDateStartOfWeek = this.addHours(
      this.submitDate,
      -1 * (24 * daySinceMonday)
    );
    dueDateStartOfWeek.setHours(this.workStart);
    dueDateStartOfWeek.setMinutes(this.workStartMinute);

    return dueDateStartOfWeek;
  }

  public addTurnaround(turnaroundHours: number): Date {
    const actualHour =
      this.submitDate.getHours() + this.submitDate.getMinutes() / 60;
    // We know, that the submitDate's hour is valid workday hour. We can calculate how many hour passed, since the start of the day.

    const hoursFromTheStartOfTheDay = actualHour - this.workStart;
    const daysFromTheStartOfTheWeek = this.getDaySinceMonday();

    const turnaroundHoursFromTheStartOfTheDay =
      turnaroundHours +
      hoursFromTheStartOfTheDay +
      8 * daysFromTheStartOfTheWeek; //8 because its working hour, not real hour

    const dueDateStartOfWeek = this.initDueStartOfWeek();

    // We calculate, from the start of the day, how many hours and how many day will pass.
    const workHours = turnaroundHoursFromTheStartOfTheDay % 8;
    const workDays = Math.floor(turnaroundHoursFromTheStartOfTheDay / 8);
    const workWeeks = Math.floor(workDays / 5);
    const leftWorkDays = workDays % 5;

    const actualTimeInHours =
      workHours + leftWorkDays * 24 + workWeeks * 24 * 7;
    const dueDate = this.addHours(dueDateStartOfWeek, actualTimeInHours);

    return dueDate;
  }
}
