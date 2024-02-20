import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conwaygame',
  templateUrl: './conwaygame.page.html',
  styleUrls: ['./conwaygame.page.scss'],
})
export class ConwaygamePage implements OnInit {

  alto:number = 50;
  ancho:number = 50;
  tablero:any[][] = [];


  constructor() { }

  ngOnInit() {
    this.poblar();
  }

  poblar(){
    for (let i = 0; i < this.alto; i++) {
      this.tablero[i] = [];
      for (let j = 0; j < this.ancho; j++) {
        this.tablero[i][j] = Math.floor(Math.random() * 2);
      }
    }

    console.table(this.tablero);
  }

}
