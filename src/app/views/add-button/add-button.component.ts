import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {Category} from '../../model/Category';
import {Measure} from '../../model/Measure';
import {HttpService} from '../../service/http.service';
import {ExercisesComponent} from '../exercises/exercises.component';

export interface DialogData {

  title: string;
  category: Category;
  amount: number;
  measure: Measure;
  date: Date;
  categories: Category[];
  measures: Measure[];
}


@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent {

  title: string;
  category: Category;
  amount: number;
  measure: Measure;
  date: Date;
  categories: Category[];
  measures: Measure[];

  constructor(public dialog: MatDialog,
              private httpService: HttpService,
              private exercisesComponent: ExercisesComponent) {
    this.httpService.categorySubject.subscribe(value => this.categories = value);
    this.httpService.measureSubject.subscribe(value => this.measures = value);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        categories: this.categories, measures: this.measures,
        title: this.title, category: this.category, amount: this.amount, measure: this.measure, date: this.date
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.httpService.addExercise(result);
    });
  }
}
