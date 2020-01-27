import { Injectable } from '@angular/core';
import { ArticleModel } from '../../components/articles-page/article/article.model';
import { Articles } from '../../models/Articles';

const STORAGE_KEY = 'local_articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesControllerService {
  public model: ArticleModel[];

  constructor() {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.model = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } else {
      this.model = Articles;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
    }
  }

  public getArticles(): ArticleModel[] {
    return this.model;
  }

  public getCurrentArticle(index: number): ArticleModel {
    return this.model[index];
  }

  public updateCurrentArticle(article: ArticleModel, index: number): void {
    this.model[index] = article;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }

  public addArticle(article: ArticleModel): void {
    this.model.unshift(article);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }
  public deleteArticle(index: number): void {
    this.model.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }
}