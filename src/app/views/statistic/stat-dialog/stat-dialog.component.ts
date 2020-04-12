import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {StatDialogData} from '../stat.component';
import {HttpService} from '../../../service/http.service';
import {StatService} from '../stat.service';

@Component({
  selector: 'app-stat-dialog',
  templateUrl: './stat-dialog.component.html'
})
export class StatDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StatDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public statData: StatDialogData,
              private httpService: HttpService,
              private statService: StatService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.statService.statDialogData = result;
      this.httpService.getStatistic(result);
    });
  }

  ngOnInit(): void {
  }
}
