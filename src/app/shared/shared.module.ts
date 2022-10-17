import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ConfirmPromptComponent } from './confirm-prompt/confirm-prompt.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByNumber } from './pipes/order-by.pipe';
import { orderByText } from './pipes/order-by.pipe';
import { RecipesFiltersTabComponent } from './recipes-filters-tab/recipes-filters-tab.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    RecipeCardsComponent,
    ConfirmPromptComponent,
    FilterPipe,
    OrderByNumber,
    orderByText,
    RecipesFiltersTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgImageSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    MatListModule,
    MatDividerModule,
    RecipeCardsComponent,
    NgImageSliderModule,
    ConfirmPromptComponent,
    MatAutocompleteModule,
    FilterPipe,
    OrderByNumber,
    orderByText,
    RecipesFiltersTabComponent
  ],
})
export class SharedModule { }