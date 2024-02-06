import { Component, OnInit } from '@angular/core';
import { InfinitescrolladataService } from '../services/infinitescrolladata.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-infinitescrolla',
  templateUrl: './infinitescrolla.page.html',
  styleUrls: ['./infinitescrolla.page.scss'],
})
export class InfinitescrollaPage implements OnInit {
  items: any[] = [];
  fechaIngreso: string = '';
  nombre: string = '';
  categoria: string = '';
  provedor: string = '';
  precio: string = '';
  cantidad: string = '';
  idStock: string = '';

  constructor(private infiniteScrollService: InfinitescrolladataService) {}

  ngOnInit() {
    this.generateItems();
  }

  generateItems() {
    for (let i = 0; i < 100; i++) {
      this.items.push(i);
    }
  }

  onIonInfinite(evento: any) {
    this.generateItems();
    console.log('onIonInfinite');
    setTimeout(()=>{
      (evento as InfiniteScrollCustomEvent).target.complete();

    },500);
  }

  limpiarFormulario(){

  }
  async guardarDatos(){
    const datos = {
      fechaIngreso: this.fechaIngreso,
      nombre: this.nombre,
      provedor: this.provedor,
      categoria: this.categoria,
      precio: this.precio,
      cantidad: this.cantidad,
    };
    const saved = await this.infiniteScrollService.uploadData(datos,this.idStock);

  }
}
