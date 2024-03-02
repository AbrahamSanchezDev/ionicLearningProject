import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimpleAlgorithmsPageRoutingModule } from './simple-algorithms-routing.module';

import { SimpleAlgorithmsPage } from './simple-algorithms.page';

import { PlotlyModule } from 'angular-plotly.js';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimpleAlgorithmsPageRoutingModule,
    PlotlyModule
  ],
  declarations: [SimpleAlgorithmsPage],
})
export class SimpleAlgorithmsPageModule {}
