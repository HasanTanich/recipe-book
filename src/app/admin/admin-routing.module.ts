import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { ContactComponent } from './contact-us/contact-us.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';

const routes: Routes = [
  { path: 'contact-us', component: ContactComponent },
  { path: 'manage-recipes', canActivate: [AdminGuard], component: ManageRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }