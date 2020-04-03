import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Exercise} from '../model/Exercise';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  exerciseSubject = new BehaviorSubject<Exercise[]>(TestData.exercises);
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
  }

  fillExercisesByCategory(category: Category): void {
    const exercises = TestData.exercises.filter(exercise => exercise.category === category);
    this.exerciseSubject.next(exercises);
  }
}
