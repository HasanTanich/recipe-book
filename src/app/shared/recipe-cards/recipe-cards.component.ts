import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/core/models/ImagesSlider.model';
import { Recipe } from 'src/app/core/models/Recipe.model';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.scss'],
})
export class RecipeCardsComponent implements OnInit {
  @Input() recipes: Promise<Recipe[]>;
  @Input() Cuisine: string;

  imagesGallery: Image[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.recipes.then((data) => {
      data.map((d) => {
        let temp = {
          image: d.image,
          thumbImage: d.image,
          title: d.name,
          alt: d.name,
        };
        this.imagesGallery.push(temp);
      });
    });
  }

  async goToRecipe(index: number) {
    let recipe;

    await this.recipes.then((r) => {
      r.map((a) => {
        if (a.name == this.imagesGallery[index].title) recipe = a;
      });
    });

    this.router.navigate(['/recipe-details', this.imagesGallery[index].title], {
      state: recipe,
    });
  }
}
