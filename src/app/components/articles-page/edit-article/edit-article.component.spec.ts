import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditArticleComponent } from './edit-article.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;
  /* tslint:disable */
  let de: DebugElement;
  let el: HTMLElement;
  /* tslint:enable */

  const dialogRefStub = { };
  const matDialogDataStub = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticleComponent ],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: matDialogDataStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid', () => {
    component.form.formGroup.controls.title.setValue('');
    component.form.formGroup.controls.author.setValue('');
    component.form.formGroup.controls.content.setValue('');
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form valid', () => {
    component.form.formGroup.controls.title.setValue('test');
    component.form.formGroup.controls.author.setValue('test');
    component.form.formGroup.controls.content.setValue('test');
    expect(component.form.formGroup.valid).toBeTruthy();
  });

  it('should call onNoClick method', () => {
    spyOn(component, 'onNoClick');
    component.onNoClick();
    expect(component.onNoClick).toHaveBeenCalled();
  });
});
