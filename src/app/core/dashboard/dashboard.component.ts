import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { DataService } from '../services/data.service';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ItalianRecipes: Promise<Recipe[]>;
  ChineseRecipes: Promise<Recipe[]>;
  SyrianRecipes: Promise<Recipe[]>;
  BritishRecipes: Promise<Recipe[]>;
  JapaneseRecipes: Promise<Recipe[]>;
  AmericanRecipes: Promise<Recipe[]>;
  MoroccanRecipes: Promise<Recipe[]>;

  constructor(
    public dataService: DataService,
    public recipeData: RecipesDataService
  ) {}

  imagesGalleryItems: Promise<Recipe[]> = this.dataService.getData('recipes');

  ngOnInit(): void {
    this.ItalianRecipes = this.recipeData.getRecipesFromCuisine('Italian');
    this.ChineseRecipes = this.recipeData.getRecipesFromCuisine('Chinese');
    this.SyrianRecipes = this.recipeData.getRecipesFromCuisine('Syrian');
    this.BritishRecipes = this.recipeData.getRecipesFromCuisine('British');
    this.JapaneseRecipes = this.recipeData.getRecipesFromCuisine('Japanese');
    this.AmericanRecipes = this.recipeData.getRecipesFromCuisine('American');
    this.MoroccanRecipes = this.recipeData.getRecipesFromCuisine('Moroccan');
  }
}
