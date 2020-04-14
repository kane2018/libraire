import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LendCdPage } from './lend-cd.page';

const routes: Routes = [
  {
    path: '',
    component: LendCdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LendCdPageRoutingModule {}
