import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogtrackerService {

  logVisible = false;
  settingsVisible = false;
  logVisibilityChange: Subject<boolean> = new Subject<boolean>();
  settingsVisibilityChange: Subject<boolean> = new Subject<boolean>();
  pomodoroTimeChange: Subject<boolean> = new Subject<boolean>();
  startTime;
  pomodoroTime;
  

  constructor() { 
    
  }

  showLog(){
    this.logVisible = true;
    this.logVisibilityChange.next(this.logVisible);
  }

  showSettings(){
    this.settingsVisible = true;
    this.settingsVisibilityChange.next(this.settingsVisible);
  }

  setPomodoroTime(newPomodoroTime){
    let pomodoroSettings = {};
    //this.pomodoroTime = newPomodoroTime;
    if(localStorage.getItem('pomodoroSettings')!==null){
      pomodoroSettings = JSON.parse(localStorage.getItem('pomodoroSettings'));

    }
    
      pomodoroSettings["pomodoroTime"] = newPomodoroTime;
    
    localStorage.setItem('pomodoroSettings', JSON.stringify(pomodoroSettings));
    this.pomodoroTimeChange.next();
  }
}
