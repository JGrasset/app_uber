import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlteraralumnoaadPageRoutingModule } from './alteraralumnoaad-routing.module';

import { AlteraralumnoaadPage } from './alteraralumnoaad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlteraralumnoaadPageRoutingModule
  ],
  declarations: [AlteraralumnoaadPage]
})
export class AlteraralumnoaadPageModule {}
