import {Measure} from './Measure';
import {Category} from './Category';

export class Exercise {
  id: number;
  title: string;
  amount: number;
  date: Date;
  category?: Category;
  measure?: Measure;

  constructor(id: number, title: string, amount: number, date: Date, category?: Category, measure?: Measure) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.amount = amount;
    this.measure = measure;
    this.date = date;
  }
}
