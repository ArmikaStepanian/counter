import {Component, OnInit} from '@angular/core';
import {Exercise} from '../../model/Exercise';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {

  exercises: Exercise[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.exerciseSubject.subscribe(value => this.exercises = value);
  }
}
