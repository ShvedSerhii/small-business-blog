import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { ViewChild } from "@angular/core";
import { ArticleComponent } from './article.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticlesControllerService } from 'src/app/services/articles-controller/articles-controller.service';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  /* tslint:disable */
  let de: DebugElement;
  let el: HTMLElement;
  /* tslint:enable */

  const matDialogStub = {
    open: () => {}
  };

  const articlesControllerServiceStub = {
    getCurrentArticle: () => {},
    updateCurrentArticle: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleComponent],
      providers: [
        {provide: ArticlesControllerService, useValue: articlesControllerServiceStub},
        {provide: MatDialog, useValue: matDialogStub}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = {title: "", image: "", author: "", content: ""};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
