import { Component, OnInit } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-simple-algorithms',
  templateUrl: './simple-algorithms.page.html',
  styleUrls: ['./simple-algorithms.page.scss'],
})
export class SimpleAlgorithmsPage implements OnInit {
  public grafica = {
    data: [{ x: [1, 2, 3], y: [1, 2, 3], type: 'bar' }],
    layout: { title: '', width: 800, height: 800 },
  };

  constructor() {}

  ngOnInit() {
    this.poblar(100);
    this.bubbleSort();
  }

  generarRandomNum(n: number): number[] {
    let arr: number[] = [];
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * n));
    }
    return arr;
  }

  poblar(n: number) {
    this.poblarX(n);
    this.poblarY(n);
  }
  poblarX(n: number) {
    for (let i = 0; i < n; i++) {
      this.grafica.data[0].x[i] = i + 1;
    }
  }
  poblarY(n: number) {
    for (let i = 0; i < n; i++) {
      this.grafica.data[0].y[i] = Math.floor(Math.random() * n) + 1;
    }
  }
  bubbleSort() {
    let check;
    do {
      check = false;
      for (let i = 0; i < this.grafica.data[0].y.length -1; i++) {
        if (this.grafica.data[0].y[i] > this.grafica.data[0].y[i + 1]) {
          let temp = this.grafica.data[0].y[i];
          this.grafica.data[0].y[i] = this.grafica.data[0].y[i + 1];
          this.grafica.data[0].y[i + 1] = temp;
          check = true;
        }
      }
    } while (check);
  }
}
