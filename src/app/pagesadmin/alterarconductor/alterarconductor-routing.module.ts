import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarconductorPage } from './alterarconductor.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarconductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarconductorPageRoutingModule {}
