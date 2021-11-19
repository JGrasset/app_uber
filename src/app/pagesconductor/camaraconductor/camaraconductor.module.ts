import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraconductorPageRoutingModule } from './camaraconductor-routing.module';

import { CamaraconductorPage } from './camaraconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraconductorPageRoutingModule
  ],
  declarations: [CamaraconductorPage]
})
export class CamaraconductorPageModule {}
