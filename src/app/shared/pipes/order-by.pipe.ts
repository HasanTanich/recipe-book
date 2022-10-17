import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/app/core/models/recipe.model';

@Pipe({
  name: 'orderByNumber',
})
export class OrderByNumber implements PipeTransform {

  transform(recipes: Recipe[], toggle: boolean, element: string): Recipe[] {
    if (!toggle) {
      return recipes;
    }
    else if (toggle) {
      return recipes.sort((a: Recipe, b: Recipe) =>
        b[element] - (a[element]));
    }
    else {
      return recipes;
    }
  }
}


@Pipe({
  name: 'orderByText',
})

export class orderByText implements PipeTransform {

  transform(recipes: Recipe[], toggle: boolean, element: string): Recipe[] {
    if (!toggle) {
      return recipes;
    }
    else if (toggle) {
      return recipes.sort((a: Recipe, b: Recipe) =>
        a[element].localeCompare(b[element]));
    }
    else {
      return recipes;
    }
  }

}
