import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminRespuestasPage } from './admin-respuestas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminRespuestasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRespuestasPageRoutingModule {}
