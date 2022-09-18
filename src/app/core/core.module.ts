import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatListModule } from '@angular/material/list';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CdkTableModule,
    MatListModule,
  ],
})

export class CoreModule { }