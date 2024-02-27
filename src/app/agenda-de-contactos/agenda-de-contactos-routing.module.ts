import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaDeContactosPage } from './agenda-de-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaDeContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaDeContactosPageRoutingModule {}
