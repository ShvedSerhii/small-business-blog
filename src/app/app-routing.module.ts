import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'articles', component: ArticlesPageComponent},
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
