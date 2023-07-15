import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/Recipe.model';
import { RecipesDataService } from '../../services/recipes-data.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeDetailsResolver implements Resolve<Recipe> {
  constructor(private recipeDataService: RecipesDataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> {
    let data = this.recipeDataService.gerRecipeFromName(route.params['name']);
    return data;
  }
}
