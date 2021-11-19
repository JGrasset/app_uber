import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaalumnosPage } from './listaalumnos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaalumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaalumnosPageRoutingModule {}
