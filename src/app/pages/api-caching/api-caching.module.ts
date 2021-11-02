import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiCachingPageRoutingModule } from './api-caching-routing.module';

import { ApiCachingPage } from './api-caching.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiCachingPageRoutingModule
  ],
  declarations: [ApiCachingPage]
})
export class ApiCachingPageModule {}
