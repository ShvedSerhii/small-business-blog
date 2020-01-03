import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component'
import { EventsPageComponent } from './components/events-page/events-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';


const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'articles', component: ArticlesPageComponent},
  { path: 'events', component: EventsPageComponent},
  { path: 'gallery', component: GalleryPageComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
