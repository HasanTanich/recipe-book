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


@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    RecipeCardsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    NgImageSliderModule,
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
  ]
})
export class SharedModule { }