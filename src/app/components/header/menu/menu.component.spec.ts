import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies/cookies.service';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const cookieStub = {
    isAuthorization: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [{provide: CookiesService, useValue: cookieStub}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call logout method", () => {
    spyOn(component, "logout");
    component.logout();
    expect(component.logout).toHaveBeenCalled();
  }); 
});
