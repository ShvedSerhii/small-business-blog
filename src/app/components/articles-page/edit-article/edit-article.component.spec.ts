import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleComponent } from './edit-article.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('EditArticleComponent', () => {
  let component: EditArticleComponent;
  let fixture: ComponentFixture<EditArticleComponent>;

  const dialogRefStub = { }
  const matDialogDataStub = {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArticleComponent ],
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
});
