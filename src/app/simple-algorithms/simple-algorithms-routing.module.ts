import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimpleAlgorithmsPage } from './simple-algorithms.page';

const routes: Routes = [
  {
    path: '',
    component: SimpleAlgorithmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimpleAlgorithmsPageRoutingModule {}
