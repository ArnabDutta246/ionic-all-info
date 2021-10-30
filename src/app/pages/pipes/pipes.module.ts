import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipesPageRoutingModule } from './pipes-routing.module';

import { PipesPage } from './pipes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesPageRoutingModule,
    PipesModule
  ],
  declarations: [PipesPage]
})
export class PipesPageModule {}
