import { Component } from "@angular/core";
import { LaunchService } from "./_services/launch.service";
import { Source } from "./_models/launch/Source";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  launches:Source;
  developer_name="Anpurnanand Tiwary"
  title = "SpaceX Launch Programs";
   launchSuccess=true;
     landSuccess=true;
     launchYear="2014"
  constructor(private launcher: LaunchService) { }

  ngOnInit() {
    this.launcher.launches().subscribe(data => {
      this.launches = data;
    });
  }
  fnlaunchesSuccess(launchSuccess:any) {
    this.launchSuccess=launchSuccess;
    this.launcher.launchesSuccess(this.launchSuccess).subscribe(data => {
      this.launches = data;
    });
  }

  fnlaunchesLandSuccess(launchLandSuccess:any) {
    this.landSuccess=launchLandSuccess;
    this.launcher.launchesLandSuccess(this.landSuccess).subscribe(data => {
      this.launches = data;
    });
  }

  fnlaunchesLandSuccessYear(launchesLandSuccessYear:any) {
this.launchYear=launchesLandSuccessYear;
    this.launcher.launchesLandSuccessYear(this.launchYear).subscribe(data => {
      this.launches = data;
      //console.log(this.launches);
       //console.log(this.launches[0].rocket.first_stage.cores[6].land_success);
      // console.log(this.launches[0].links.mission_patch);
    });

  }


}
