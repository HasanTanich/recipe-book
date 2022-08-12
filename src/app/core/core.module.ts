import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgImageSliderModule,
  ],
})

export class CoreModule { }