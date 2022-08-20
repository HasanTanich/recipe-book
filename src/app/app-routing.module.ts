import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './core/contact/contact.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RecipesComponent } from './core/recipes/recipes.component';
import { ReviewsComponent } from './core/reviews/reviews.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'homepage', component: DashboardComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdminComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'recipes', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }