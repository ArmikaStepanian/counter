import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Category} from '../model/Category';
import {Measure} from '../model/Measure';
import {Exercise} from '../model/Exercise';
import {StatisticRequest} from '../model/StatisticRequest';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  getAllCategoriesUrl = 'http://localhost:8080/api/allCategories';
  getAllMeasuresUrl = 'http://localhost:8080/api/allMeasures';
  // todo what if million exerscises??? page?
  getAllExercisesUrl = 'http://localhost:8080/api/allExercises';
  getExercisesByCategoryUrl = 'http://localhost:8080/api/exercisesByCategory';
  addExerciseUrl = 'http://localhost:8080/api/addExercise';
  statisticUrl = 'http://localhost:8080/api/stat';

  measureSubject = new BehaviorSubject<Measure[]>([]);
  categorySubject = new BehaviorSubject<Category[]>([]);
  exerciseSubject = new BehaviorSubject<Exercise[]>([]);

  constructor(private http: HttpClient) {
    this.getAllCategories();
    this.getAllMeasures();
    this.getAllExercises();
  }

  getAllMeasures(): void {
    this.http.get<Measure[]>(this.getAllMeasuresUrl)
      .subscribe(value => this.measureSubject.next(value));
  }

  getAllCategories(): void {
    this.http.get<Category[]>(this.getAllCategoriesUrl)
      .subscribe(value => this.categorySubject.next(value));
  }

  getAllExercises(): void {
    this.http.get<Exercise[]>(this.getAllExercisesUrl)
      .subscribe(value => this.exerciseSubject.next(value));
  }

  getExercisesByCategory(category: Category): void {
    this.http.get<Exercise[]>(this.getExercisesByCategoryUrl + '?category=' + category.id)
      .subscribe(value => this.exerciseSubject.next(value));
  }

  addExercise(exercise: Exercise): void {
    this.http.post<Exercise[]>(this.addExerciseUrl, exercise)
      .forEach(value => this.exerciseSubject.next(value));
    this.getAllExercises();
  }

  getStatistic(statisticRequest: StatisticRequest): void {
    this.http.post<number>(this.statisticUrl, statisticRequest)
      .forEach(value => console.log(value));
    this.getAllExercises();
  }
}
