import { TestBed } from '@angular/core/testing';

import { ArticlesControllerService } from './articles-controller.service';

describe('ArticlesControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesControllerService = TestBed.get(ArticlesControllerService);
    expect(service).toBeTruthy();
  });
});
