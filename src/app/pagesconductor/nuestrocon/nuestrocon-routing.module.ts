import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestroconPage } from './nuestrocon.page';

const routes: Routes = [
  {
    path: '',
    component: NuestroconPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestroconPageRoutingModule {}
