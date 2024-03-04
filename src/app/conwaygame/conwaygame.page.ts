import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-conwaygame',
  templateUrl: './conwaygame.page.html',
  styleUrls: ['./conwaygame.page.scss'],
})
export class ConwaygamePage implements OnInit {
  tableroSiguiente: any[][] = [];

  alto: number = 25;
  ancho: number = 25;
  tablero: any[][] = [];

  constructor(private redireccionamiento: RedireccionamientoService) {}

  nav(ruta: string) {
    this.redireccionamiento.navegar(ruta);
  }

  ngOnInit() {
    this.poblar();
    this.iterar();
  }

  contarVecinos() {
    this.tableroSiguiente = this.copiarArreglo(this.tablero);
    for (let i = 0; i < this.alto; i++) {
      for (let j = 0; j < this.ancho; j++) {
        let vecinos = this.contador(i, j);
        if (this.tablero[i][j] == 0 && vecinos === 3) {
          this.tableroSiguiente[i][j] = 1;
        } else if (this.tablero[i][j] == 1 && (vecinos < 2 || vecinos > 3)) {
          this.tableroSiguiente[i][j] = 0;
        }
      }
    }
  }
  copiarArreglo(tableroOriginal: number[][]): number[][] {
    let copia: number[][] = [];
    for (let i = 0; i < tableroOriginal.length; i++) {
      copia[i] = [];
      for (let j = 0; j < tableroOriginal[i].length; j++) {
        copia[i][j] = tableroOriginal[i][j];
      }
    }
    return copia;
  }
  actualizarEstado() {
    this.tablero = this.tableroSiguiente;
  }

  contador(a: number, b: number) {
    let vecinos = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let x = (a + i + this.alto) % this.alto;
        let y = (b + j + this.ancho) % this.ancho;
        vecinos += this.tablero[x][y];
      }
    }
    vecinos -= this.tablero[a][b];
    return vecinos;
  }

  iterar() {
    setInterval(() => {
      this.contarVecinos();
      this.actualizarEstado();
    }, 100);
  }

  poblar() {
    for (let i = 0; i < this.alto; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < this.ancho; j++) {
        this.tablero[i][j] = Math.floor(Math.random() * 2);
      }
    }

    console.table(this.tablero);
  }
}
