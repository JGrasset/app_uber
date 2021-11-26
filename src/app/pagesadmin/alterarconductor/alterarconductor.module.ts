import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarconductorPageRoutingModule } from './alterarconductor-routing.module';

import { AlterarconductorPage } from './alterarconductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarconductorPageRoutingModule
  ],
  declarations: [AlterarconductorPage]
})
export class AlterarconductorPageModule {}
