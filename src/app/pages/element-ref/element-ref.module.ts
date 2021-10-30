import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElementRefPageRoutingModule } from './element-ref-routing.module';

import { ElementRefPage } from './element-ref.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElementRefPageRoutingModule
  ],
  declarations: [ElementRefPage]
})
export class ElementRefPageModule {}
