import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-filters-tab',
  templateUrl: './recipes-filters-tab.component.html',
  styleUrls: ['./recipes-filters-tab.component.scss'],
})
export class RecipesFiltersTabComponent implements OnInit {
  cookingTimeToggle: boolean = false;
  nameToggle: boolean = false;
  cuisineToggle: boolean = false;

  @Input() cuisineRecipes: boolean;

  @Output() cookingTime = new EventEmitter<boolean>();
  @Output() name = new EventEmitter<boolean>();
  @Output() cuisine = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  cookingTimeActive() {
    this.cookingTimeToggle = !this.cookingTimeToggle;
    this.cookingTime.emit(this.cookingTimeToggle);
  }
  nameActive() {
    this.nameToggle = !this.nameToggle;
    this.name.emit(this.nameToggle);
  }
  cuisineActive() {
    this.cuisineToggle = !this.cuisineToggle;
    this.cuisine.emit(this.cuisineToggle);
  }
}
