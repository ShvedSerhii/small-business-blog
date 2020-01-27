import { Component } from '@angular/core';
import { ArticleModel } from './article/article.model';
import { MatDialog } from '@angular/material/dialog';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditData } from './edit-article/edit-data.model';
import { ArticlesControllerService } from 'src/app/services/articles-controller/articles-controller.service';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent {
  public articles: ArticleModel[];
  public data: EditData;
  public searchText: any;
  public isDesc = false;

  constructor(
    public dialog: MatDialog,
    public articlesController: ArticlesControllerService,
  ) {
    this.data = new EditData();
    this.articles = articlesController.getArticles();
  }

  public sort(): void {
    this.isDesc = !this.isDesc; // change the direction
    const direction = this.isDesc ? 1 : -1;

    this.articles.sort((a, b) => {
      if (a.title < b.title) {
        return -1 * direction;
      } else if (a.title > b.title) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '600px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.title && result.date && result.author && result.content) {
        this.articlesController.addArticle(result);
      }
    });
  }
}
