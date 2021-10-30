import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleChartPage } from './google-chart.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleChartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleChartPageRoutingModule {}
