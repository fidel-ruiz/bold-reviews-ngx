import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  declarations: []
})
export class SharedModule { }
