import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/Recipe.model';
import { DataService } from '../../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AllRecipesResolver implements Resolve<Recipe[]> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    let data = this.dataService.getData('recipes');
    return data;
  }
}
