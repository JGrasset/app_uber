import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarconductorPageRoutingModule } from './modificarconductor-routing.module';

import { ModificarconductorPage } from './modificarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarconductorPageRoutingModule
  ],
  declarations: [ModificarconductorPage]
})
export class ModificarconductorPageModule {}
