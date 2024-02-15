import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminRespuestasPageRoutingModule } from './admin-respuestas-routing.module';

import { AdminRespuestasPage } from './admin-respuestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminRespuestasPageRoutingModule
  ],
  declarations: [AdminRespuestasPage]
})
export class AdminRespuestasPageModule {}
