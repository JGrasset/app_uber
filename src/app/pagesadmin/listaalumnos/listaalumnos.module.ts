import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaalumnosPageRoutingModule } from './listaalumnos-routing.module';

import { ListaalumnosPage } from './listaalumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaalumnosPageRoutingModule
  ],
  declarations: [ListaalumnosPage]
})
export class ListaalumnosPageModule {}
