import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RecipeDetailsComponent } from './core/recipes/recipe-details/recipe-details.component';
import { RecipeDetailsResolver } from './core/recipes/recipe-details/recipe-details.resolver';
import { RecipesComponent } from './core/recipes/recipes.component';
import { AllRecipesResolver } from './core/recipes/resolvers/all-recipes.resolver';
import { FilterRecipesResolver } from './core/recipes/resolvers/filter-recipes.resolver';
import { SearchRecipesResolver } from './core/recipes/resolvers/search-recipes.resolver';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: "full", },
  { path: 'homepage', component: DashboardComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'recipes', component: RecipesComponent, resolve: { recipes: AllRecipesResolver } },
  { path: 'recipes/:cuisine', component: RecipesComponent, resolve: { filterRecipesByCuisine: FilterRecipesResolver } },
  { path: 'recipes/search/:key', component: RecipesComponent, resolve: { searchRecipes: SearchRecipesResolver } },
  { path: 'recipe-details/:name', component: RecipeDetailsComponent, resolve: { recipe: RecipeDetailsResolver } },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }