export class StatisticRequest {
  title: string;
  from: Date;
  to: Date;


  constructor(title: string, from: Date, to: Date) {
    this.title = title;
    this.from = from;
    this.to = to;
  }
}
