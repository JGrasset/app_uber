import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraconductorPage } from './camaraconductor.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraconductorPageRoutingModule {}
