import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UiOnePageRoutingModule } from './ui-one-routing.module';

import { UiOnePage } from './ui-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UiOnePageRoutingModule
  ],
  declarations: [UiOnePage]
})
export class UiOnePageModule {}
