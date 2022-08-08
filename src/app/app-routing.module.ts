import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ReviewsComponent } from './core/reviews/reviews.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'homepage', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'reviews', canActivate: [AuthGuard], component: ReviewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }