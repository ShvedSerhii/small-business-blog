import { Component, OnInit } from '@angular/core';
import { ArticlesModel } from '../models/ArticlesModel';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {

  public model: ArticlesModel = new ArticlesModel();

  constructor() { }

  ngOnInit() {
  }

}
