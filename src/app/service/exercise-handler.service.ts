import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {BehaviorSubject} from 'rxjs';
import {Exercise} from '../model/Exercise';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseHandlerService {

  exerciseSubject = new BehaviorSubject<Exercise[]>([]);

  // todo what if million exerscises??? page?
  getAllExercisesUrl = 'http://localhost:8080/api/allExercises';
  getExercisesByCategoryUrl = 'http://localhost:8080/api/exercisesByCategory';

  constructor(private http: HttpClient) {
    this.getAllExercises();
  }

  getAllExercises(): void {
    this.http.get<Exercise[]>(this.getAllExercisesUrl)
      .forEach(value => this.exerciseSubject.next(value));
  }

  getExercisesByCategory(category: Category): void {
    this.http.get<Exercise[]>(this.getExercisesByCategoryUrl + '?category=' + category.id)
      .forEach(value => this.exerciseSubject.next(value));
  }
}
