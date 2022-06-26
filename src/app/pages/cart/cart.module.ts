import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartHeaderPageModule } from './cart-header/cart-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartHeaderPageModule
  ],
  declarations: [CartPage]
})
export class CartPageModule { }
