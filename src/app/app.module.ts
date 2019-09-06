import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './containers/header/header.component';
import { TimerComponent } from './components/timer/timer.component';
import { LogComponent } from './containers/log/log.component';
import { LogtrackerService } from './services/logtracker.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TimerComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [LogtrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
