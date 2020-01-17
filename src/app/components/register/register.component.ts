import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration.service';
import { RegisterModel } from './register.model';
import RegisterForm from './register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public success: any;
  data: any;
  private model: RegisterModel;
  public form: RegisterForm;
  public email: any;
  public password: any;
  public name: any;
  public surname: any;
  public phone: any;
  constructor(private registrationService: RegistrationService) {
    this.model = new RegisterModel();
    this.form = new RegisterForm(this.model);
    this.success = {};
    this.email = this.form.formGroup.get('email');
    this.password = this.form.formGroup.get('password');
    this.name = this.form.formGroup.get('name');
    this.surname = this.form.formGroup.get('surname');
    this.phone = this.form.formGroup.get('phone');
  }

  onSubmit(form) {
    this.registrationService.registerUser(
      data => {
        console.log('data', data);
        this.data = data;
        this.registrationService.setData(data);
        this.email.reset();
        this.password.reset();
        this.name.reset();
        this.surname.reset();
        this.phone.reset();
        alert('You are registered!');
      },
      `{"name":"${form.value.name}", "surname":"${form.value.surname}", "email":"${form.value.email}",
          "phone":"${form.value.phone}", "password":"${form.value.password}"}`
    );
  }
}
