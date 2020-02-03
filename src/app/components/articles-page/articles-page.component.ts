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

  constructor(
    public dialog: MatDialog,
    public articlesController: ArticlesControllerService,
  ) {
    this.data = new EditData();
    this.articles = articlesController.getArticles();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '600px',
      data: new EditData()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      if (result.title && result.author && result.content) {
        this.articlesController.addArticle(result);
      }
    });
  }
}
