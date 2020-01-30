import { TestBed } from '@angular/core/testing';

import { CookiesService } from './cookies.service';
import { CookieService } from 'ngx-cookie-service';

describe('CookiesService', () => {
  const cookieServiceStub = {
    set: () => {},
    get: () => {},
    delete: () => {}
  };

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: CookieService, useValue: cookieServiceStub }]
  }));

  it('should be created', () => {
    const service: CookiesService = TestBed.get(CookiesService);
    expect(service).toBeTruthy();
  });
});
