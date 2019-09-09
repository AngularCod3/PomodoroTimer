import { Component, OnInit, ViewChild } from '@angular/core';
import { LogtrackerService } from 'src/app/services/logtracker.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @ViewChild('settingsModal', {static: false})
  settingsModal: ModalDirective;

  pomodorotime:number;

  constructor(private logTracker: LogtrackerService) { }

  ngOnInit() {

    this.logTracker.settingsVisibilityChange.subscribe((value)=>{
      if(value){
        //this.configureLogEntries();
        this.settingsModal.show();
      }
      else{
        this.settingsModal.hide();
      }
    });

    this.logTracker.pomodoroTimeChange.subscribe(value=>{
      if(localStorage.getItem('pomodoroSettings')!==null){
        let pomodoroSettings = JSON.parse(localStorage.getItem('pomodoroSettings'));
        this.pomodorotime = pomodoroSettings.pomodoroTime;
      }
    });

    if(localStorage.getItem('pomodoroSettings')!==null){
      let pomodoroSettings = JSON.parse(localStorage.getItem('pomodoroSettings'));
      this.pomodorotime = pomodoroSettings.pomodoroTime;
    }
    else{
      this.pomodorotime = 25;
    }
  }

  saveSettings(){
    let pomodoroTime = (<HTMLInputElement>document.getElementById('pomodoroTime')).value;
    console.log(typeof pomodoroTime);
    if (!Number.isNaN(parseInt(pomodoroTime))){
      this.logTracker.setPomodoroTime(parseInt(pomodoroTime));
    }
    this.settingsModal.hide();
  }

}
