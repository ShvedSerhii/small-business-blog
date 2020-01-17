import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsGuardService } from './services/events-guard.service';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'articles', component: ArticlesPageComponent},
  { path: 'events', component: EventsPageComponent, canActivate: [EventsGuardService]},
  { path: 'gallery', component: GalleryPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegisterComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [EventsGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
