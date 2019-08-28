import { Component, OnInit, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  pomodoro_minutes = 1;
  pause = false; //is timer paused
  counter;
  currentDate:Date;
  deadLine:Date;
  interval:number;
  timeleft:string;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit() {

    window.onbeforeunload = ()=>this.resetTimer();
    this.resetTimer();

  }

  startTimer(){
    
  
    if(this.pause){
      this.pause = false;
    }
    else{
      
      this.counter = setInterval(()=>this.timer(), 1000);
    }
  }

  timer(){
    

    if (!this.pause) { 
      this.interval -= 1;
      this.currentDate = new Date(); //get current time
      this.deadLine = new Date(this.currentDate.getTime());
      this.deadLine.setSeconds(this.deadLine.getSeconds() + this.interval);
      let diff = this.deadLine.getTime() - this.currentDate.getTime();
      let totalSecs = Math.abs(diff/1000);
      if(totalSecs <=0){
        clearInterval(this.counter);
      }
      let minutes = Math.floor(totalSecs/60);
      let seconds = totalSecs - minutes*60;
      let formattedSeconds = ("0" + seconds).slice(-2);
      this.timeleft = minutes.toString() + ':' + formattedSeconds.toString();
    }
  }

  stopTimer(){
    this.pause = true;
  }

  resetTimer(){
    this.pause = false;
    this.interval = 60 * this.pomodoro_minutes; //five minutes is 300 seconds!
    let totalSecs = this.interval;
    let minutes = Math.floor(totalSecs/60);
    let seconds = totalSecs - minutes*60;
    let formattedSeconds = ("0" + seconds).slice(-2);
    this.timeleft = minutes.toString() + ':' + formattedSeconds.toString();
    try{
      clearInterval(this.counter);
    }
    catch{

    }
    
  }

}


