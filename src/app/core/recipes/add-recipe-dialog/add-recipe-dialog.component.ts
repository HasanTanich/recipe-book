import { Component, Inject, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-recipe-dialog',
  templateUrl: './add-recipe-dialog.component.html',
  styleUrls: ['./add-recipe-dialog.component.scss']
})

export class AddRecipeDialogComponent implements OnInit {

  addRecipeForm: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;
  ingredients: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe, public dialogRef: MatDialogRef<AddRecipeDialogComponent>, public dataService: DataService) { }

  ngOnInit(): void {
    this.addRecipeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mealType: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      ingredients: new FormControl([], [Validators.required]),
      cookingTime: new FormControl('', [Validators.required]),
      cuisine: new FormControl('', [Validators.required]),
    });
  }

  addRecipe(form: FormGroup) {
    this.dataService.addData(form.value, 'recipes');
    this.dialogRef.close();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our ingredient
    if (value) {
      this.ingredients.push(value);
      this.addRecipeForm.get('ingredients').setValue(this.ingredients);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(ingredient): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
      this.addRecipeForm.get('ingredients').setValue(this.ingredients);
    }
  }
}
