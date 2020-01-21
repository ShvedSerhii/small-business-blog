import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditData } from './edit-data.model';
import EditForm from './edit-data.form'
 
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent {
  public model: EditData;
  public form: EditForm;
  constructor(
    public dialogRef: MatDialogRef<EditArticleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditData) {
      this.model = new EditData();
      this.form = new EditForm(this.model);
    } 

  onNoClick(): void {
    this.dialogRef.close();
  }

}
