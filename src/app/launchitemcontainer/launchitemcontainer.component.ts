import { Component, OnInit } from "@angular/core";
import { LaunchService } from "../_services/launch.service";

import { Source } from "../_models/launch/Source";

import * as _ from "lodash";

@Component({
  selector: "launch-item-container",
  inputs: ["launch"],
  templateUrl: "./launchitemcontainer.component.html",
  styleUrls: ["./launchitemcontainer.component.css"]
})
export class LaunchitemcontainerComponent implements OnInit {
  launch: Source;
  constructor(private launcher: LaunchService) {}

  ngOnInit() {

  }
}
