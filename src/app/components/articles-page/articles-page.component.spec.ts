import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPageComponent } from './articles-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesService } from 'src/app/services/cookies.service';
import { ArticlesControllerService } from 'src/app/services/articles-controller.service';
import { MatCardModule } from '@angular/material/card';

describe('ArticlesPageComponent', () => {
  let component: ArticlesPageComponent;
  let fixture: ComponentFixture<ArticlesPageComponent>;
  const matDialogStub = {
    open: () => {}
  }
  const articlesControllerServiceStub = {
    getArticles: () => {},
    addArticle: () => {}
  }
  const cookiesServiceStub = {
    getCookie: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesPageComponent],
      providers: [
        {provide: MatDialog, useValue: matDialogStub},
        {provide: CookiesService, useValue: cookiesServiceStub},
        {provide: ArticlesControllerService, useValue: articlesControllerServiceStub} 
      ],
      imports: [MatCardModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
