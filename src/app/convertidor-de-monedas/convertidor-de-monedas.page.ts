import { Component, OnInit } from '@angular/core';

export class modena {
  nombre: string = '';
  USD: number = 1;
  INR: number = 1;
  CNY: number = 1;
  EUR: number = 1;
  MXN: number = 1;

  constructor(
    name: string,
    usd: number,
    inr: number,
    cny: number,
    eur: number,
    mxn: number
  ) {
    this.nombre = name;
    this.USD = usd;
    this.INR = inr;
    this.CNY = cny;
    this.EUR = eur;
    this.MXN = mxn;
  }

  getTotalFor(other: string, amount: number) {

    console.log("Converting " + this.nombre + "  a  " + other);
    switch (other) {
      case 'USD':
        return this.USD * amount;
      case 'INR':
        return this.INR * amount;
      case 'CNY':
        return this.CNY * amount;
      case 'EUR':
        return this.EUR * amount;
      case 'MXN':
        console.log(this.MXN);
        console.log(amount);
        console.log(this.MXN * amount);
        return this.MXN * amount;
    }
    console.log("NO MATCH");
    return 1;
  }
}
@Component({
  selector: 'app-convertidor-de-monedas',
  templateUrl: './convertidor-de-monedas.page.html',
  styleUrls: ['./convertidor-de-monedas.page.scss'],
})
export class ConvertidorDeMonedasPage implements OnInit {
  moneda1: string = '';
  moneda2: string = '';

  equivalente: number = 0;
  cantidad: number = 0;

  monedas: { [key: string]: any } = {};
  constructor() {
    const usd = new modena('USD', 1, 42032.5, 7.16, 0.93, 17.05);
    const inr = new modena('INR', 0.012, 1, 0.012, 0.011, 0.21);
    const cny = new modena('CNY', 0.14, 11.67, 1, 0.13, 2.38);
    const eur = new modena('EUR', 1.08, 2, 3, 1, 18.36);
    const mxn = new modena('MXN', 2, 2, 3, 4, 1);

    this.monedas['USD'] = usd;
    this.monedas['INR'] = inr;
    this.monedas['CNY'] = cny;
    this.monedas['EUR'] = eur;
    this.monedas['MXN'] = mxn;
  }

  ngOnInit() {}

  optionChanged() {
    console.log(this.moneda1 + ' - ' + this.moneda2);
  }

  calcular() {
    if(this.moneda1 == "" || this.moneda2 == ""){
      return;
    }
    if(this.cantidad <= 0){

      return;
    }

    this.equivalente =  this.monedas[this.moneda1].getTotalFor(this.moneda2,this.cantidad);
  }
}
