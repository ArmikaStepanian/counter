import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {StatDialogData} from '../../stat.component';

@Component({
  selector: 'app-stat-datepicker',
  templateUrl: './stat-datepicker.component.html'
})
export class StatDatepickerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public statData: StatDialogData) {
  }

  ngOnInit(): void {
  }
}
