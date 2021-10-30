import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceUnitPipe } from './price-unit/price-unit.pipe';



@NgModule({
  declarations: [PriceUnitPipe],
  imports: [
    CommonModule
  ],
  exports:[PriceUnitPipe]
})
export class PipesModule { }
