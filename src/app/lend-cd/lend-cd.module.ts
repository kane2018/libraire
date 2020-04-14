import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LendCdPageRoutingModule } from './lend-cd-routing.module';

import { LendCdPage } from './lend-cd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LendCdPageRoutingModule
  ],
  declarations: [LendCdPage]
})
export class LendCdPageModule {}
