import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApitesterPage } from './apitester.page';

const routes: Routes = [
  {
    path: '',
    component: ApitesterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApitesterPageRoutingModule {}
