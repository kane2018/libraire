import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookListPageRoutingModule } from './book-list-routing.module';

import { BookListPage } from './book-list.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BookListPageRoutingModule,
    ],
    exports: [
        BookListPage
    ],
    declarations: [BookListPage]
})
export class BookListPageModule {}
