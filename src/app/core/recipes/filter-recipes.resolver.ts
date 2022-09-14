import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';
import { RecipesDataService } from '../services/recipes-data.service';

@Injectable({
  providedIn: 'root'
})
export class FilterRecipesResolver implements Resolve<Recipe[]> {
  constructor(private recipeDataService: RecipesDataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> {
    let data = this.recipeDataService.getRecipesFromCuisine(route.params['cuisine']);
    return data;
  }
}