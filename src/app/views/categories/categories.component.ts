import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  activeCategory: Category;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.categorySubject.subscribe(value => this.categories = value);
  }

  showTasksByCategory(category: Category) {
    this.activeCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
