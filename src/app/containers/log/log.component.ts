import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { LogtrackerService } from 'src/app/services/logtracker.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  logElements = [];
  headElements = ['#', 'Start Time', 'End Time'];

  @ViewChild('logModal', {static: false})
  logModal: ModalDirective;

  constructor(private logTracker: LogtrackerService, private cdref: ChangeDetectorRef) { }

  ngOnInit() {
    this.logTracker.logVisibilityChange.subscribe((value)=>{
      if(value){
        this.configureLogEntries();
        this.logModal.show();
      }
      else{
        this.logModal.hide();
      }
    });

    this.configureLogEntries();
  }

  configureLogEntries(){
    if(localStorage.getItem('pomodoroLog') !== null){
      this.logElements = JSON.parse(localStorage.getItem('pomodoroLog'));
      this.logElements = this.logElements.map((value)=>{
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        let startDate = new Date(value.startTime);
        value.startTime = days[startDate.getDay()] + ', ' + months[startDate.getMonth()] + ' '  
          + startDate.getDate() + ' ' + startDate.getFullYear() + ', ' + startDate.toLocaleTimeString();

        let endDate = new Date(value.endTime);
        value.endTime = days[endDate.getDay()] + ', ' + months[endDate.getMonth()] + ' ' 
          + endDate.getDate() + ' ' + endDate.getFullYear() + ', ' + endDate.toLocaleTimeString();
        
        return value;
      });
      console.log(this.logElements);
    }
  }

  clearEntries(){
    localStorage.setItem('pomodoroLog', JSON.stringify([]));
    this.configureLogEntries();

  }

}
