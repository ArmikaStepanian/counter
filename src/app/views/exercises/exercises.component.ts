import {Component, OnInit} from '@angular/core';
import {Exercise} from '../../model/Exercise';
import {ExerciseHandlerService} from '../../service/exercise-handler.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[];

  constructor(private exerciseHandler: ExerciseHandlerService) {
  }

  ngOnInit(): void {
    this.exerciseHandler.exerciseSubject.subscribe(value => this.exercises = value);
  }
}
