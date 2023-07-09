import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecipeDetailsComponent } from '../core/recipes/recipe-details/recipe-details.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ContactComponent } from './contact-us/contact-us.component';
import { UserMessagesDialogComponent } from './contact-us/user-messages-dialog/user-messages-dialog.component';
import { AddRecipeDialogComponent } from './manage-recipes/add-recipe-dialog/add-recipe-dialog.component';
import { EditRecipeDialogComponent } from './manage-recipes/edit-recipe-dialog/edit-recipe-dialog.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { RecipeComponent } from './manage-recipes/recipe/recipe.component';

@NgModule({
  declarations: [
    AdminComponent,
    ManageRecipesComponent,
    RecipeComponent,
    AddRecipeDialogComponent,
    EditRecipeDialogComponent,
    RecipeDetailsComponent,
    ContactComponent,
    UserMessagesDialogComponent,
  ],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
})
export class AdminModule {}
