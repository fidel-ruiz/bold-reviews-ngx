import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ReviewComponent],
  declarations: [ReviewComponent]
})
export class ReviewModule { }
