import { Component, Input } from '@angular/core';
import { ArticlesControllerService } from 'src/app/services/articles-controller.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() title: string;
  @Input() author: string;
  @Input() date: string;
  @Input() image: string;
  @Input() content: string;
  @Input() index: number;

  constructor(public articlesController: ArticlesControllerService){
    
  }
}
