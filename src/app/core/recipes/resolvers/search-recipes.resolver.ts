import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { DataService } from '../../services/data.service';

@Injectable({
  providedIn: 'root'
})

export class SearchRecipesResolver implements Resolve<Recipe[]> {
  constructor(private dataService: DataService) {
  }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Recipe[]> {
    let data = this.dataService.getData('recipes');

    let filteredRecipes = [];
    let searchInput;

    searchInput = route.queryParams['key'];

    await data.then(recipes => {
      recipes.map(recipe => {
        filteredRecipes.push(recipe);
      });
    });

    filteredRecipes = filteredRecipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return filteredRecipes;
  }
}
