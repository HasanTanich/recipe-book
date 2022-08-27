import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../services/data.service';
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

  constructor(public dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(r: Recipe) {
    this.recipeDeleted.emit(r);
    this.dataService.deleteData('recipes', r.id);
  }

  onEdit(r: Recipe) {
    let dialogRef = this.dialog.open(EditRecipeDialogComponent, {
      data: r,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.updateData('recipes', result);
        this.recipeUpdated.emit(result);
      }
    });
  }
}