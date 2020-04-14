import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LendBookPageRoutingModule } from './lend-book-routing.module';

import { LendBookPage } from './lend-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LendBookPageRoutingModule
  ],
  declarations: [LendBookPage]
})
export class LendBookPageModule {}
