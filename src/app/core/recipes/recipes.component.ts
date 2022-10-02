import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes;
  cuisine;
  searchResults;

  constructor(public dataService: DataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      if (data['recipes']) {
        this.recipes = data['recipes'];
      } else if (data['filterRecipesByCuisine']) {
        this.recipes = data['filterRecipesByCuisine'];
        this.cuisine = this.route.snapshot.params['cuisine'];
      }
      else if (data['searchRecipes']) {
        this.recipes = data['searchRecipes'];
        this.searchResults = this.route.snapshot.params['key'];
      }
    });
  }

}