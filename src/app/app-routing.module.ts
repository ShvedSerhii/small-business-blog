import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageGuard } from './guards/page.guard';
import { LogoutGuard } from './guards/logout.guard';

const routes: Routes = [
  { path: 'home', component: MainPageComponent, canActivate: [PageGuard]},
  { path: 'articles', component: ArticlesPageComponent, canActivate: [PageGuard]},
  { path: 'events', component: EventsPageComponent, canActivate: [PageGuard]},
  { path: 'gallery', component: GalleryPageComponent, canActivate: [PageGuard]},
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  { path: 'registration', component: RegisterComponent, canActivate: [LogoutGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, canActivate: [PageGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PageGuard, LogoutGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
