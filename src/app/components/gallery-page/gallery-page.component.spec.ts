import { Lightbox } from 'ngx-lightbox';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageComponent } from './gallery-page.component';

describe('GalleryPageComponent', () => {
  let component: GalleryPageComponent;
  let fixture: ComponentFixture<GalleryPageComponent>;
  const lightboxStub = {
    open: () => {},
    close: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryPageComponent],
      providers: [{provide: Lightbox, useValue: lightboxStub}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should open sort method", () => {
    spyOn(component, "open");
    component.open(1);
    expect(component.open).toHaveBeenCalled();
  });

  it("should call close method", () => {
    spyOn(component, "close");
    component.close();
    expect(component.close).toHaveBeenCalled();
  });
});
