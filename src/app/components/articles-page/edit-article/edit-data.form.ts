import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { EditData } from './edit-data.model';
/*
    ReactiveForm structure class
  */
export default class EditForm {
  private formBuilder: FormBuilder;
  public formGroup: FormGroup;
  public model: EditData;

  constructor(model: EditData) {
    this.formBuilder = new FormBuilder();
    this.model = model;
    this.createForm();
  }

  // Create form fields with validation rules
  public createForm() {
    this.formGroup = this.formBuilder.group({
      title: new FormControl(this.model.title, {
        validators: [Validators.required],
        updateOn: 'change'
      }),
      author: new FormControl(this.model.author, {
        validators: [Validators.required],
        updateOn: 'change'
      }),
      date: new FormControl(this.model.date, {
        validators: [Validators.required],
        updateOn: 'change'
      }),
      content: new FormControl(this.model.content, {
        validators: [Validators.required],
        updateOn: 'change'
      })
    });

    // form update
    this.formGroup.valueChanges.subscribe((data: any) => {
      this.model.title = data.title;
      this.model.author = data.author;
      this.model.date = data.date;
      this.model.content = data.content;
    });
  }
}
