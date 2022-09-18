import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.scss']
})
export class ManageRecipesComponent implements OnInit {

  recipes;
  addedRecipeValue: FormGroup;

  constructor(public dataService: DataService, public dialog: MatDialog, public notificationService: NotificationService) { }

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
        result.form['ingredients'] = result.ingredients.ingredients;
        result = result.form;
        this.dataService.addData(result, 'recipes');
        this.recipes.push(result);
      }
    });
  }

}