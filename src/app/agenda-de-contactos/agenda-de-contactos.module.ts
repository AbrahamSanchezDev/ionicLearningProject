import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaDeContactosPageRoutingModule } from './agenda-de-contactos-routing.module';

import { AgendaDeContactosPage } from './agenda-de-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaDeContactosPageRoutingModule
  ],
  declarations: [AgendaDeContactosPage]
})
export class AgendaDeContactosPageModule {}
