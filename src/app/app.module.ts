import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LineChartComponent } from './components/main-page/line-chart/line-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BubbleChartComponent } from './components/main-page/bubble-chart/bubble-chart.component';
import { CandlestickChartComponent } from './components/main-page/candlestick-chart/candlestick-chart.component';
import { PieChartComponent } from './components/main-page/pie-chart/pie-chart.component';
import { SankeyChartsComponent } from './components/main-page/sankey-charts/sankey-charts.component';
import { MatCardModule } from '@angular/material/card';
import { HistogramChartComponent } from './components/main-page/histogram-chart/histogram-chart.component';




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
    LineChartComponent,
    BubbleChartComponent,
    CandlestickChartComponent,
    PieChartComponent,
    SankeyChartsComponent,
    HistogramChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GoogleChartsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
