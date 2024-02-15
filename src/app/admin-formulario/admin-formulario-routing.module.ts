import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminFormularioPage } from './admin-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: AdminFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFormularioPageRoutingModule {}
