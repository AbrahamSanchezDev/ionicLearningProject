import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConwaygamePageRoutingModule } from './conwaygame-routing.module';

import { ConwaygamePage } from './conwaygame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConwaygamePageRoutingModule
  ],
  declarations: [ConwaygamePage]
})
export class ConwaygamePageModule {}
