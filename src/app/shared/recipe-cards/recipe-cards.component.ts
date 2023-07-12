import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/core/models/Recipe.model';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.scss'],
})
export class RecipeCardsComponent implements OnInit {
  @Input() recipes: Promise<Recipe[]>;
  @Input() Cuisine: string;

  constructor() {}

  ngOnInit(): void {}
}
