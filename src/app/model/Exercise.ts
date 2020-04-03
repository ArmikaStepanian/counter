import {Measure} from './Measure';
import {Category} from './Category';

export class Exercise {
  id: number;
  title: string;
  category: Category;
  amount: number;
  measure: Measure;
  date: Date;

  constructor(id: number, title: string, category: Category, amount: number, measure: Measure, date: Date) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.amount = amount;
    this.measure = measure;
    this.date = date;
  }
}
