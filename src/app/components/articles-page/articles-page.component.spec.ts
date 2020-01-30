import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPageComponent } from './articles-page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticlesControllerService } from 'src/app/services/articles-controller/articles-controller.service';
import { Pipe, PipeTransform } from '@angular/core';

describe('ArticlesPageComponent', () => {
  let component: ArticlesPageComponent;
  let fixture: ComponentFixture<ArticlesPageComponent>;

  const matDialogStub = {
    open: () => {}
  };
  const articlesControllerStub = {
    getArticles: () => {},
    addArticle: () => {}
  };

  @Pipe({ name: 'paginate' })
  class PaginateMockPipe implements PipeTransform {
    transform(value: number): number {
      // Do stuff here, if you want
      return value;
    }
  }

  @Pipe({ name: 'filter' })
  class FilterMockPipe implements PipeTransform {
    transform(value: number): number {
      // Do stuff here, if you want
      return value;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesPageComponent, FilterMockPipe, PaginateMockPipe],
      providers: [
        { provide: MatDialog, useValue: matDialogStub },
        { provide: ArticlesControllerService, useValue: articlesControllerStub }
      ],
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
