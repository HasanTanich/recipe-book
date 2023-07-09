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
export class FilterRecipesResolver implements Resolve<Recipe[]> {
  constructor(private recipeDataService: RecipesDataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe[]> | Promise<Recipe[]> {
    let data;
    if (route.params['cuisine']) {
      data = this.recipeDataService.getRecipesFromCuisine(
        route.params['cuisine']
      );
    } else if (route.params['mealType']) {
      data = this.recipeDataService.getRecipesFromMealType(
        route.params['mealType']
      );
    }
    return data;
  }
}
