import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { ConfirmPromptComponent } from './confirm-prompt/confirm-prompt.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderByNumber, orderByText } from './pipes/order-by.pipe';
import { RecipeCardsComponent } from './recipe-cards/recipe-cards.component';
import { RecipesFiltersTabComponent } from './recipes-filters-tab/recipes-filters-tab.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    RecipeCardsComponent,
    ConfirmPromptComponent,
    FilterPipe,
    OrderByNumber,
    orderByText,
    RecipesFiltersTabComponent,
    ImageSliderComponent,
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
    MatProgressSpinnerModule,
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
    RecipesFiltersTabComponent,
    ImageSliderComponent,
  ],
})
export class SharedModule {}
