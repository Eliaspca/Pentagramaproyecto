import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksTop10Page } from './books-top10.page';

const routes: Routes = [
  {
    path: '',
    component: BooksTop10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksTop10PageRoutingModule {}
