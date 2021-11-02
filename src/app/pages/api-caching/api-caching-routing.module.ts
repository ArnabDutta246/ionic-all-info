import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiCachingPage } from './api-caching.page';

const routes: Routes = [
  {
    path: '',
    component: ApiCachingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiCachingPageRoutingModule {}
