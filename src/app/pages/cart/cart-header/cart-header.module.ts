import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartHeaderPageRoutingModule } from './cart-header-routing.module';

import { CartHeaderPage } from './cart-header.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartHeaderPageRoutingModule
  ],
  declarations: [CartHeaderPage],
  exports: [CartHeaderPage]
})
export class CartHeaderPageModule { }
