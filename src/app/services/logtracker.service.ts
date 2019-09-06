import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogtrackerService {

  logVisible = false;
  logVisibilityChange: Subject<boolean> = new Subject<boolean>();
  startTime;
  

  constructor() { }

  showLog(){
    this.logVisible = true;
    this.logVisibilityChange.next(this.logVisible);
  }
}
