import { Component } from '@angular/core';
import { ArticleModel } from './article/article.model';
import { Articles } from '../models/Articles';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent {
  public articles: ArticleModel[] = Articles;
}
