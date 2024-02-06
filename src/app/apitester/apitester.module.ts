import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApitesterPageRoutingModule } from './apitester-routing.module';

import { ApitesterPage } from './apitester.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApitesterPageRoutingModule
  ],
  declarations: [ApitesterPage]
})
export class ApitesterPageModule {}
