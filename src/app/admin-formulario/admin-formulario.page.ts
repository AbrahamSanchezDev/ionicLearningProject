import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

interface Pregunta {
  pregunta: string;
  respuestas: {
    ra: string;
    rb: string;
    rc: string;
    rd: string;
  };
}
@Component({
  selector: 'app-admin-formulario',
  templateUrl: './admin-formulario.page.html',
  styleUrls: ['./admin-formulario.page.scss'],
})
export class AdminFormularioPage implements OnInit {
  preguntas: Pregunta[] = [];
  index: number = 1;
  contador: number[] = [1];

  titulo: string = '';
  subtitulo: string = '';

  constructor(private redireccionamiento: RedireccionamientoService) {}

  nav(ruta: string) {
    this.redireccionamiento.navegar(ruta);
  }

  ngOnInit() {}

  agregar() {
    const numero = this.index + 1;
    this.index++;
    this.contador.push(numero);
  }
  eleminar(posicion: number) {
    this.contador = this.contador.filter((e) => e !== posicion);
  }
}
