import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/Category';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  activeCategory: Category;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.activeCategory = null;
    this.httpService.categorySubject.subscribe(value => this.categories = value);
  }

  showExercisesByCategory(category: Category) {
    this.activeCategory = category;
    this.httpService.getExercisesByCategory(category);
  }

  showAllExercises() {
    this.activeCategory = null;
    this.httpService.getAllExercises();
  }
}
