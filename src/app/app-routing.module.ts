import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './components/blogpost/blogpost.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  { path: 'blog', component: BlogPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
