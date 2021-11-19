import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaconductoresPageRoutingModule } from './listaconductores-routing.module';

import { ListaconductoresPage } from './listaconductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaconductoresPageRoutingModule
  ],
  declarations: [ListaconductoresPage]
})
export class ListaconductoresPageModule {}
