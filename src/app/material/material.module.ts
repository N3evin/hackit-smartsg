import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
  	FormsModule,
  	MatToolbarModule,
  	MatRadioModule,
  	NgbModule
  ]
})
export class MaterialModule { }
