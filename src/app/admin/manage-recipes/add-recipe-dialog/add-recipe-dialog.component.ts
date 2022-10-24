import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';

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
  tags: any[] = [];

  constructor(public dialogRef: MatDialogRef<AddRecipeDialogComponent>) { }

  ngOnInit(): void {
    this.addRecipeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      mealType: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      ingredients: new FormControl([]),
      tags: new FormControl([]),
      cookingTime: new FormControl('', [Validators.required]),
      cuisine: new FormControl('', [Validators.required]),
      reviews: new FormControl([]),
      id: new FormControl(''),
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  addIngredient(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our ingredient
    if (value) {
      this.ingredients.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  removeIngredient(ingredient): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our ingredient
    if (value) {
      this.tags.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  removeTag(ingredient): void {
    const index = this.tags.indexOf(ingredient);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

}
