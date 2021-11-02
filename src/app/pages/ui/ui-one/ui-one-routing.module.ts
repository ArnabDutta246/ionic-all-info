import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiOnePage } from './ui-one.page';

const routes: Routes = [
  {
    path: '',
    component: UiOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiOnePageRoutingModule {}
