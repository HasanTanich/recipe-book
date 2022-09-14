import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes;

  constructor(public dataService: DataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.data.subscribe((data: Data) => {
      if (data['filterRecipes']) {
        this.recipes = data['filterRecipes'];
      }
      this.recipes = data['recipes'] ? data['recipes'] : data['filterRecipes']
    })
  }

}