import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { EditData } from '../edit-article/edit-data.model';
import { ArticlesControllerService } from 'src/app/services/articles-controller/articles-controller.service';

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

  public data: EditData;

  constructor(
    public dialog: MatDialog,
    public articlesController: ArticlesControllerService,
  ) {
    this.data = new EditData();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '600px',
      data: this.articlesController.getCurrentArticle(this.index)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.title && result.date && result.author && result.content) {
        this.articlesController.updateCurrentArticle(result, this.index);
      }
    });
  }
}
