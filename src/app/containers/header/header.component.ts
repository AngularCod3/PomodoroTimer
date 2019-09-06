import { Component, OnInit } from '@angular/core';
import { LogtrackerService } from 'src/app/services/logtracker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private logTracker: LogtrackerService) { }

  ngOnInit() {
  }

  showLog(){
    this.logTracker.showLog();
  }

}
