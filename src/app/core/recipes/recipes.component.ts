import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  addedRecipeValue: FormGroup;

  constructor(public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  recipeDeleted(data) {
    this.recipes = this.recipes.filter(r => {
      return r !== data;
    });
  }

  recipeUpdated(data) {
    this.recipes = this.recipes.map(a => {
      return data.id === a.id ? data : a;
    });
  }

  getRecipes() {
    return this.dataService.getData('recipes').then(data => {
      this.recipes = data;
    });
  }

  addRecipe() {
    let dialogRef = this.dialog.open(AddRecipeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.addData(result, 'recipes');
        this.recipes.push(result);
      }
    });
  }

}