import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  display: string = '0';

  constructor(private redireccionamiento: RedireccionamientoService) {}

  nav(ruta: string) {
    this.redireccionamiento.navegar(ruta);
  }

  ngOnInit() {}

  clear() {
    this.display = '0';
  }

  igual() {
    try {
      this.display = eval(this.display);
    } catch (error) {
      this.display = this.errorText;
    }
  }

  errorText: string = 'Error!';

  hasError() {
    return this.display == this.errorText;
  }
  borrar() {
    if (this.display.length == 1 || this.hasError()) {
      this.display = '0';
      return;
    }
    this.display = this.display.slice(0, -1);
  }
  add(key: string) {
    console.log('Adding ' + key);
    if (this.display == '0') {
      this.display = key;
      return;
    }
    this.display += key;
  }
}
