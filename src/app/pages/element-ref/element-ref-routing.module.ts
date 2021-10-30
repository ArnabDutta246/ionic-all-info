import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElementRefPage } from './element-ref.page';

const routes: Routes = [
  {
    path: '',
    component: ElementRefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementRefPageRoutingModule {}
