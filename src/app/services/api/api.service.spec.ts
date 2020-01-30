import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

describe('ApiService', () => {
 const httpClientStub = {
   post: () => {},
   get: () => {},
   put: () => {},
   delete: () => {}
 };

 beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: HttpClient, useValue: httpClientStub }]
  }));

 it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
