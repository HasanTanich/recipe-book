import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Recipe } from 'src/app/core/models/Recipe.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  CuisineMenuList = ['Italian', 'Chinese', 'British', 'French', 'Japanese'];

  MealTypeMenuList = [
    'Dinner',
    'Breakfast',
    'Lunch',
    'Fast Food',
    'Appetizer',
    'Side Dish',
    'Family Dinner',
  ];

  searchInput = new FormControl('', Validators.required);
  searchOptions: string[] = [];
  filteredSearchOptions: Observable<string[]>;
  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  loggedIn: boolean = false;
  recipes: Promise<Recipe[]>;
  constructor(
    private auth: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loggedIn = this.auth.Authenticated();
    this.recipes = this.dataService.getData('recipes');

    // searchOptions = array with recipes names
    this.recipes.then((r) => {
      r.map((d) => {
        this.searchOptions.push(d.name);
      });
    });

    this.filteredSearchOptions = this.searchInput.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }

  recipeSelected(searchInput) {
    this.router.navigate(['/recipes/search', searchInput], {
      queryParams: { key: searchInput },
    });
  }
}
