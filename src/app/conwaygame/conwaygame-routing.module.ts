import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConwaygamePage } from './conwaygame.page';

const routes: Routes = [
  {
    path: '',
    component: ConwaygamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConwaygamePageRoutingModule {}
