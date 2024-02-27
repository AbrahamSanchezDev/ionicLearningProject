import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleAlgorithmsPageRoutingModule } from './simple-algorithms-routing.module';

import { SimpleAlgorithmsPage } from './simple-algorithms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleAlgorithmsPageRoutingModule
  ],
  declarations: [SimpleAlgorithmsPage]
})
export class SimpleAlgorithmsPageModule {}
