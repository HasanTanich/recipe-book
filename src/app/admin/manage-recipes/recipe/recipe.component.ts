import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from 'src/app/core/models/recipe.model';
import { DataService } from 'src/app/core/services/data.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ConfirmPromptComponent } from 'src/app/shared/confirm-prompt/confirm-prompt.component';
import { EditRecipeDialogComponent } from '../edit-recipe-dialog/edit-recipe-dialog.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {


  @Input() recipe;
  @Output() recipeDeleted = new EventEmitter<Recipe>();
  @Output() recipeUpdated = new EventEmitter<Recipe>();

  constructor(public dataService: DataService, public dialog: MatDialog, public notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onDelete(r: Recipe) {
    let dialogRef = this.dialog.open(ConfirmPromptComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipeDeleted.emit(r);
        this.dataService.deleteData('recipes', r.id);
      }
    });
  }

  onEdit(r: Recipe) {
    let dialogRef = this.dialog.open(EditRecipeDialogComponent, {
      data: r
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        result.form['ingredients'] = result.ingredients.ingredients;
        result = result.form;
        this.dataService.updateData('recipes', result);
        this.recipeUpdated.emit(result);
      }
    });
  }
}