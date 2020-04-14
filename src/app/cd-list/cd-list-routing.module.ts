import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdListPage } from './cd-list.page';

const routes: Routes = [
  {
    path: '',
    component: CdListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CdListPageRoutingModule {}
