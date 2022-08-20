import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  // recipes: Recipe[];
  recipes;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.recipes = this.dataService.getData('recipes');
  }

}