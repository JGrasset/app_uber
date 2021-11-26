import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestroconPageRoutingModule } from './nuestrocon-routing.module';

import { NuestroconPage } from './nuestrocon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestroconPageRoutingModule
  ],
  declarations: [NuestroconPage]
})
export class NuestroconPageModule {}
