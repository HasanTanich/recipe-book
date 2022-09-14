import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe;

  constructor(private router: Router) {
    this.recipe = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
  }

}
