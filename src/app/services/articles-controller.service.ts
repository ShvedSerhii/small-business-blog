import { Injectable, OnInit } from '@angular/core';
import { ArticleModel } from '../components/articles-page/article/article.model';
import { Articles } from './../components/models/Articles'

const STORAGE_KEY = 'local_articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesControllerService implements OnInit {
  public model: ArticleModel[];


  constructor() {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.model = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } else {
      this.model = Articles;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
    }
  }

  getArticles(): ArticleModel[] {
    return this.model;
  }

  addArticle(article: ArticleModel): void {
    this.model.unshift(article); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
  }

  ngOnInit(){
    // if (localStorage.getItem(STORAGE_KEY)) {
    //   this.model = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // } else {
    //   this.model = Articles;
    //   localStorage.setItem(STORAGE_KEY, JSON.stringify(this.model));
    // }
  }
}
