import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [DashboardComponent, RecipesComponent],
  imports: [CommonModule, SharedModule, CdkTableModule, MatListModule],
})
export class CoreModule {}
