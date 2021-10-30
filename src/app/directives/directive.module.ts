import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleChangesDirective } from './styleChanges/style-changes.directive';



@NgModule({
  declarations: [
    StyleChangesDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[StyleChangesDirective]
})
export class DirectiveModule { }
