import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdListPageRoutingModule } from './cd-list-routing.module';

import { CdListPage } from './cd-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CdListPageRoutingModule
    ],
    exports: [
        CdListPage
    ],
    declarations: [CdListPage]
})
export class CdListPageModule {}
