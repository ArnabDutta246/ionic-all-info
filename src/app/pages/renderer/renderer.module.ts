import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendererPageRoutingModule } from './renderer-routing.module';

import { RendererPage } from './renderer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendererPageRoutingModule
  ],
  declarations: [RendererPage]
})
export class RendererPageModule {}
