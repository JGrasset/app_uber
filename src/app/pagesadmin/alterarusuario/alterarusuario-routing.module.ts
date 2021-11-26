import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarusuarioPage } from './alterarusuario.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarusuarioPageRoutingModule {
  
}
