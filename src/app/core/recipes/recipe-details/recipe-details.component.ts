import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { Review } from '../../models/review.model';
import { RecipesDataService } from '../../services/recipes-data.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe;
  reviews = [];

  addReviewForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });

  constructor(private route: ActivatedRoute, private recipeDataService: RecipesDataService) {
  }
  ngOnInit(): void {

    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });
    if (this.recipe.reviews) this.reviews = this.recipe.reviews;
  }

  onSubmitReview(review: Review, id: string) {
    this.recipeDataService.addReviewToRecipe(review, id);
    this.reviews.push(review);
    this.addReviewForm.reset();
  }
}