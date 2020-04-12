import {Injectable} from '@angular/core';
import {StatDialogData} from './stat.component';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  statDialogData: StatDialogData;

  constructor() {
  }
}
