import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperjsPageRoutingModule } from './swiperjs-routing.module';

import { SwiperjsPage } from './swiperjs.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperjsPageRoutingModule,
    SwiperModule
  ],
  declarations: [SwiperjsPage]
})
export class SwiperjsPageModule {}
