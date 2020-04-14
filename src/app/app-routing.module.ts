import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LendBookPage} from './lend-book/lend-book.page';
import {LendBookPageModule} from './lend-book/lend-book.module';
import {LendCdPage} from './lend-cd/lend-cd.page';
import {LendCdPageModule} from './lend-cd/lend-cd.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'book-list',
    loadChildren: () => import('./book-list/book-list.module').then( m => m.BookListPageModule)
  },
  {
    path: 'cd-list',
    loadChildren: () => import('./cd-list/cd-list.module').then( m => m.CdListPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'lend-book',
    loadChildren: () => import('./lend-book/lend-book.module').then( m => m.LendBookPageModule)
  },
  {
    path: 'lend-cd',
    loadChildren: () => import('./lend-cd/lend-cd.module').then( m => m.LendCdPageModule)
  },
  {
    path: 'livre/:id',
    component: LendBookPage
  },
  {
    path: 'cd/:id',
    component: LendCdPage
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), LendBookPageModule, LendCdPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
