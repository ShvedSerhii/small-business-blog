import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration/registration.service';
import { Router } from '@angular/router';
import { BusService } from 'src/app/services/bus/bus.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  const registrationServiceStub = {  };
  const routerStub = {
    navigate: () => {}
  };
  const busStub = {
    publish: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
      providers: [
        {provide: RegistrationService, useValue: registrationServiceStub},
        {provide: Router, useValue: routerStub},
        {provide: BusService, useValue: busStub},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form invalid', () => {
    component.form.formGroup.controls.email.setValue('test');
    component.form.formGroup.controls.password.setValue('test');
    component.form.formGroup.controls.name.setValue('test');
    component.form.formGroup.controls.surname.setValue('test');
    component.form.formGroup.controls.phone.setValue('test');
    expect(component.form.formGroup.valid).toBeFalsy();
  });

  it('form valid', () => {
    component.form.formGroup.controls.email.setValue('test@test.com');
    component.form.formGroup.controls.password.setValue('password');
    component.form.formGroup.controls.name.setValue('name');
    component.form.formGroup.controls.surname.setValue('surname');
    component.form.formGroup.controls.phone.setValue('30930570840');
    expect(component.form.formGroup.valid).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    fixture.detectChanges();
    spyOn<any>(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });
});
