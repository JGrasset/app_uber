import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Auto3Component } from '../components/auto3/auto3.component';
import { Auto2Component } from '../components/auto2/auto2.component';
import { Auto1Component } from '../components/auto1/auto1.component';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,Auto1Component,Auto2Component,Auto3Component]
})
export class HomePageModule {}
