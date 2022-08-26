import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../models/recipe.model';
import { DataService } from '../services/data.service';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes;

  constructor(public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipes = this.dataService.getData('recipes');
  }

  addRecipe() {
    // this.dataService.addData('recipes')
    let dialogRef = this.dialog.open(AddRecipeDialogComponent);
  }
}