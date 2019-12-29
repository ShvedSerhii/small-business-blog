import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './articles-page/article/article.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventsTabComponent } from './events-page/events-tab/events-tab.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { MenuComponent } from './header/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ArticlesPageComponent,
    FooterComponent,
    ArticleComponent,
    EventsPageComponent,
    EventsTabComponent,
    GalleryPageComponent,
    MenuComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
