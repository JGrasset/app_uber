import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlteraralumnoaadPage } from './alteraralumnoaad.page';

const routes: Routes = [
  {
    path: '',
    component: AlteraralumnoaadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlteraralumnoaadPageRoutingModule {}
