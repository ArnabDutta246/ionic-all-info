import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartHeaderPage } from './cart-header.page';

const routes: Routes = [
  {
    path: '',
    component: CartHeaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartHeaderPageRoutingModule {}
