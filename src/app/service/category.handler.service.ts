import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryHandlerService {

  getAllCategoriesUrl = 'http://localhost:8080/api/allCategories';

  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.getAllCategoriesUrl);
  }
}
