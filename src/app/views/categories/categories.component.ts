import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/Category';
import {CategoryHandlerService} from '../../service/category.handler.service';
import {ExerciseHandlerService} from '../../service/exercise-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  activeCategory: Category;

  constructor(private categoryHandler: CategoryHandlerService,
              private exerciseHandler: ExerciseHandlerService) {
  }

  ngOnInit() {
    this.categoryHandler.getAllCategories()
      .subscribe((value: Category[]) => this.categories = value);
  }

  showExercisesByCategory(category: Category) {
    this.activeCategory = category;
    this.exerciseHandler.getExercisesByCategory(category);
  }
}
