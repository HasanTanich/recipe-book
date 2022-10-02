import { Component, OnInit } from '@angular/core';
import { Image } from '../models/imageslider.model';
import { Recipe } from '../models/recipe.model';
import { DataService } from '../services/data.service';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  imagesGallery: Image[] = [];
  ItalianRecipes: Promise<Recipe[]>;
  ChineseRecipes: Promise<Recipe[]>;
  SyrianRecipes: Promise<Recipe[]>;
  BritishRecipes: Promise<Recipe[]>;
  JapaneseRecipes: Promise<Recipe[]>;


  constructor(public dataService: DataService, public recipeData: RecipesDataService) { }

  ngOnInit(): void {
    this.ItalianRecipes = this.recipeData.getRecipesFromCuisine('Italian');
    this.ChineseRecipes = this.recipeData.getRecipesFromCuisine('Chinese');
    this.SyrianRecipes = this.recipeData.getRecipesFromCuisine('Syrian');
    this.BritishRecipes = this.recipeData.getRecipesFromCuisine('British');
    this.JapaneseRecipes = this.recipeData.getRecipesFromCuisine('Japanese');

    this.dataService.getData('recipes').then((data) => {
      data.map(d => {
        let temp = {
          image: d.image,
          thumbImage: d.image,
          title: d.name,
          alt: d.name
        }
        this.imagesGallery.push(temp);
      });
    });
  }

}