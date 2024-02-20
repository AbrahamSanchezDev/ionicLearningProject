import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertidorDeMonedasPageRoutingModule } from './convertidor-de-monedas-routing.module';

import { ConvertidorDeMonedasPage } from './convertidor-de-monedas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertidorDeMonedasPageRoutingModule
  ],
  declarations: [ConvertidorDeMonedasPage]
})
export class ConvertidorDeMonedasPageModule {}
