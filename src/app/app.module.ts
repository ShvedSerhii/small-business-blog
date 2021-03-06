import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CdkTableModule } from '@angular/cdk/table';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { CookieService } from 'ngx-cookie-service';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/articles-page/article/article.component';
import { EventsPageComponent } from './components/events-page/events-page.component';
import { EventsTabComponent } from './components/events-page/events-tab/events-tab.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { EventsListComponent } from './components/events-page/events-list/events-list.component';
import { ChartComponent } from './components/main-page/chart/chart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EditArticleComponent } from './components/articles-page/edit-article/edit-article.component';
import { FilterPipe } from './pipes/filter.pipe';

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
    NotFoundComponent,
    EventsListComponent,
    ChartComponent,
    LoginComponent,
    RegisterComponent,
    EditArticleComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GoogleChartsModule,
    MatCardModule,
    LightboxModule,
    FormsModule,
    MatListModule,
    CdkTableModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    CookieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditArticleComponent
  ],
})
export class AppModule { }
