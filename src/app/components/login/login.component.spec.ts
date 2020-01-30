import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { BrowserModule, By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { LoginService } from "src/app/services/login/login.service";
import { CookiesService } from "src/app/services/cookies/cookies.service";
import { Router } from "@angular/router";
import { BusService } from "src/app/services/bus/bus.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const loginServiceStub = {};
  const cookieStub = {
    deleteCookie: () => {}
  };
  const routerStub = {
    navigate: () => {}
  };
  const busStub = {
    publish: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      providers: [
        { provide: LoginService, useValue: loginServiceStub },
        { provide: CookiesService, useValue: cookieStub },
        { provide: Router, useValue: routerStub },
        { provide: BusService, useValue: busStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css("form"));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("form invalid when empty", () => {
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form invalid', () => {
    component.form.formGroup.controls['email'].setValue('test');
    component.form.formGroup.controls['password'].setValue('test');
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form valid', () => {
    component.form.formGroup.controls['email'].setValue('test@test.com');
    component.form.formGroup.controls['password'].setValue('password');
    expect(component.form.formGroup.valid).toBeTruthy();
  });

  it('should call submit method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should call logout method', () => {
    spyOn(component, 'logout');
    component.logout();
    expect(component.logout).toHaveBeenCalled();
});


});
