import { Component, OnInit } from '@angular/core';
// import * as PlotlyJS from 'plotly.js';
// import { PlotlyModule } from 'angular-plotly.js';
// PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-simple-algorithms',
  templateUrl: './simple-algorithms.page.html',
  styleUrls: ['./simple-algorithms.page.scss'],
})
export class SimpleAlgorithmsPage implements OnInit {

  public grafica = {
    data:[{x:[],y:[]}]
  };

  constructor() { }

  ngOnInit() {
  }

}
