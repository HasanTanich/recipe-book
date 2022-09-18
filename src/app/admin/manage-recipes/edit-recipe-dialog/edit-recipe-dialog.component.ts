import { ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/core/models/recipe.model';

@Component({
  selector: 'app-edit-recipe-dialog',
  templateUrl: './edit-recipe-dialog.component.html',
  styleUrls: ['./edit-recipe-dialog.component.scss']
})
export class EditRecipeDialogComponent implements OnInit {

  editRecipeForm: FormGroup;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;

  ingredients: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Recipe,
    public dialogRef: MatDialogRef<EditRecipeDialogComponent>) {
  }

  ngOnInit(): void {
    this.editRecipeForm = new FormGroup({
      name: new FormControl(this.data.name, [Validators.required]),
      mealType: new FormControl(this.data.mealType, [Validators.required]),
      image: new FormControl(this.data.image, [Validators.required]),
      ingredients: new FormControl(''),
      cookingTime: new FormControl(this.data.cookingTime, [Validators.required]),
      cuisine: new FormControl(this.data.cuisine, [Validators.required]),
      id: new FormControl(this.data.id),
    });
    this.ingredients = this.data.ingredients.slice();
  }

  onCancel() {
    this.dialogRef.close();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our ingredient
    if (value) {
      this.ingredients.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(ingredient): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

}
