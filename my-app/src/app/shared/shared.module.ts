import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolveDirective } from './resolve.directive';



@NgModule({
  declarations: [
    ResolveDirective
  ],
  exports: [
    ResolveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
