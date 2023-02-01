import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksTop10PageRoutingModule } from './books-top10-routing.module';

import { BooksTop10Page } from './books-top10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksTop10PageRoutingModule
  ],
  declarations: [BooksTop10Page]
})
export class BooksTop10PageModule {}
