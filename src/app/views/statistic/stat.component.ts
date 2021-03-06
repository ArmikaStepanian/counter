import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StatDialogComponent} from './stat-dialog/stat-dialog.component';
import {StatService} from './stat.service';
import {HttpService} from '../../service/http.service';

export interface StatDialogData {
  title: string;
  from: Date;
  to: Date;
}

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  title: string;
  from: Date;
  to: Date;

  constructor(public dialog: MatDialog,
              public statService: StatService,
              public httpService: HttpService) {
  }

  openDialog(): void {
    this.dialog.open(StatDialogComponent, {
      width: '250px',
      data: {
        title: this.title, from: this.from, to: this.to
      }
    });
  }

  ngOnInit(): void {
  }
}
