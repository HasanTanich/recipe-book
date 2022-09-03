import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './core/contact/contact.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AdminGuard } from './core/guards/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { RecipeDetailsComponent } from './core/recipes/recipe-details/recipe-details.component';
import { RecipesComponent } from './core/recipes/recipes.component';
import { ReviewsComponent } from './core/reviews/reviews.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: "full", },
  { path: 'homepage', component: DashboardComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'recipes', canActivate: [AdminGuard], component: RecipesComponent },
  { path: 'recipe-details', component: RecipeDetailsComponent },
  // {
  //   path: 'recipes', canActivate: [AdminGuard], component: RecipesComponent, children: [
  //     { path: 'recipe-details', component: RecipeDetailsComponent }
  //   ]
  // },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }