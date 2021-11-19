import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarconductorPage } from './modificarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarconductorPageRoutingModule {}
