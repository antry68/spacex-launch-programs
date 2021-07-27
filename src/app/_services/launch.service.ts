import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Source } from "../_models/launch/Source";

@Injectable({
  providedIn: "root"
})
export class LaunchService {
  constructor(private http: HttpClient) {}

  launches(): Observable<Source> {
    return this.http
      .get<Source>("https://api.spaceXdata.com/v3/launches?limit=100")
      .pipe(map((res: any) => res));
  }

  launchesSuccess(launchSuccess:any): Observable<Source> {
    return this.http
    .get<Source>( "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+launchSuccess)
    .pipe(map((res: any) => res));
  }
  launchesLandSuccess(landSuccess:any): Observable<Source> {
    return this.http
      .get<Source>( "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success="+landSuccess)
      .pipe(map((res: any) => res));
  }
  launchesLandSuccessYear(launchYear:any): Observable<Source> {
    return this.http
      .get<Source>( "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year="+launchYear)
      .pipe(map((res: any) => res));
  }
}
