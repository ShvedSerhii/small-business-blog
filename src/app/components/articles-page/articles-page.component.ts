import { ArticleModel } from './article/article.model';
import { Articles } from '../models/Articles';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditData } from './edit-article/edit-data.model';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent {
  public articles: ArticleModel[] = Articles;
  public data: EditData;

  constructor(public dialog: MatDialog) {
    this.data = new EditData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '600px',
      data: this.data 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
