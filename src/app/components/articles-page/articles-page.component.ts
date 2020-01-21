import { ArticleModel } from './article/article.model';
import { Articles } from '../models/Articles';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditArticleComponent } from './edit-article/edit-article.component';

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent {
  public articles: ArticleModel[] = Articles;
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditArticleComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
