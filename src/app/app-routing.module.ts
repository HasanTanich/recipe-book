import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AllRecipesResolver } from './core/recipes/all-recipes.resolver';
import { FilterRecipesResolver } from './core/recipes/filter-recipes.resolver';
import { RecipeDetailsComponent } from './core/recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from './core/recipes/recipes.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: "full", },
  { path: 'homepage', component: DashboardComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'recipes', component: RecipesComponent, resolve: { recipes: AllRecipesResolver } },
  { path: 'recipes/:cuisine', component: RecipesComponent, resolve: { filterRecipes: FilterRecipesResolver } },
  { path: 'recipe-details/:name', component: RecipeDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }