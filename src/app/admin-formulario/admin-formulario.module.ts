import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminFormularioPageRoutingModule } from './admin-formulario-routing.module';

import { AdminFormularioPage } from './admin-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminFormularioPageRoutingModule
  ],
  declarations: [AdminFormularioPage]
})
export class AdminFormularioPageModule {}
