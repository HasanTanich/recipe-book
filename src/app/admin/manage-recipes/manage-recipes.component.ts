import { Component, OnInit } from '@angular/core';
import { AddRecipeDialogComponent } from './add-recipe-dialog/add-recipe-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.scss']
})

export class ManageRecipesComponent implements OnInit {
  recipes;
  searchText;
  recipesLength: number = 4;

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

  async addRecipe() {

    let dialogRef = this.dialog.open(AddRecipeDialogComponent);

    await dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.form['ingredients'] = result.ingredients.ingredients;
        result.form['tags'] = result.tags.tags;
        result = result.form;
        this.dataService.addData(result, 'recipes').then(items => {
          this.recipes = items;
        });
      }
    });
  }

  showMore() {
    this.recipesLength += 4;
  }
}