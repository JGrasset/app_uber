import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarusuarioPageRoutingModule } from './alterarusuario-routing.module';

import { AlterarusuarioPage } from './alterarusuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarusuarioPageRoutingModule
  ],
  declarations: [AlterarusuarioPage]
})
export class AlterarusuarioPageModule {}
