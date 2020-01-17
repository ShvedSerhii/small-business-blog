import { Component } from '@angular/core';
import { ArticlesModel } from '../models/ArticlesModel';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent {
  public model: ArticlesModel = new ArticlesModel();
}
