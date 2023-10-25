import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
