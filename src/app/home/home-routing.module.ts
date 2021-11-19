import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auto1Component } from '../components/auto1/auto1.component';
import { Auto2Component } from '../components/auto2/auto2.component';
import { Auto3Component } from '../components/auto3/auto3.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path:'auto1',
        component: Auto1Component
  },
  {
    path:'auto2',
        component: Auto2Component
  },
  {
    path:'auto3',
        component: Auto3Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
