import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-filterarea',
  templateUrl: './filterarea.component.html',
  styleUrls: ['./filterarea.component.css']
})
export class FilterareaComponent implements OnInit {
  title = "Filters";
  FilterArray=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
  constructor(public appp: AppComponent) { }

  ngOnInit() {
  }
  ButtonClickHandlerLaunchLandYear(launchLandYear: any) {
    this.appp.fnlaunchesLandSuccessYear(launchLandYear);
  }
  ButtonClickHandlerLaunch(launch: any) {
    this.appp.fnlaunchesSuccess(launch);
  }
  ButtonClickHandlerLaunchLand(launchLand: any) {
    this.appp.fnlaunchesLandSuccess(launchLand);
  }
}
