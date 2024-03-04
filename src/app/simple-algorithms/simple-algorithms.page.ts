import { Component, OnInit } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';
import { SimpleAlgorithmsServiceService } from '../services/simple-algorithms-service.service';
import { PlotlyModule } from 'angular-plotly.js';
import { RedireccionamientoService } from '../services/redireccionamiento.service';
PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-simple-algorithms',
  templateUrl: './simple-algorithms.page.html',
  styleUrls: ['./simple-algorithms.page.scss'],
})
export class SimpleAlgorithmsPage implements OnInit {
  fibo: number[] = [];
  primes: number[] = [];

  public grafica = {
    data: [{ x: [1, 2, 3], y: [1, 2, 3], type: 'scatter' }],
    layout: { title: '', width: 800, height: 800 },
  };

  constructor(
    private simpleAlg: SimpleAlgorithmsServiceService,
    private redireccionamiento: RedireccionamientoService
  ) {}


  nav(ruta: string) {
    this.redireccionamiento.navegar(ruta);
  }

  ngOnInit() {
    this.poblar(100);
    this.bubbleSort();
    this.cargarData();
  }

  cargarData() {
    this.fibo = this.simpleAlg.fibonacci(100);
    for (let i = 1; i < 100; i++) {
      this.primes.push(this.simpleAlg.esPrimo(i));
    }
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
      for (let i = 0; i < this.grafica.data[0].y.length - 1; i++) {
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
