import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CdkTableModule } from '@angular/cdk/table';
import { RecipesComponent } from './recipes/recipes.component';
import { MatListModule } from '@angular/material/list';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { AddRecipeDialogComponent } from './recipes/add-recipe-dialog/add-recipe-dialog.component';
import { EditRecipeDialogComponent } from './recipes/edit-recipe-dialog/edit-recipe-dialog.component';
import { UserMessagesDialogComponent } from './contact/user-messages-dialog/user-messages-dialog.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    ContactComponent,
    DashboardComponent,
    RecipesComponent,
    RecipeComponent,
    AddRecipeDialogComponent,
    EditRecipeDialogComponent,
    UserMessagesDialogComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CdkTableModule,
    MatListModule,
  ],
})

export class CoreModule { }