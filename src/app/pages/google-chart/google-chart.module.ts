import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleChartPageRoutingModule } from './google-chart-routing.module';

import { GoogleChartPage } from './google-chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleChartPageRoutingModule
  ],
  declarations: [GoogleChartPage]
})
export class GoogleChartPageModule {}
