import {Component, OnInit} from '@angular/core';
import {Exercise} from '../../model/Exercise';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html'
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.exerciseSubject.subscribe(value => this.exercises = value);
  }
}
