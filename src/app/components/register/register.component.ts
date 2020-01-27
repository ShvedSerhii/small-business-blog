import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration/registration.service';
import { RegisterModel } from './register.model';
import RegisterForm from './register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public model: RegisterModel;
  public form: RegisterForm;
  constructor(private registrationService: RegistrationService) {
    this.model = new RegisterModel();
    this.form = new RegisterForm(this.model);
  }

  public onSubmit(form): void {
    this.registrationService.registerUser(
      data => {
        console.log('data', data);
        form.reset();
        alert('You are registered!');
      },
      `{"name":"${form.value.name}", "surname":"${form.value.surname}", "email":"${form.value.email}",
          "phone":"${form.value.phone}", "password":"${form.value.password}"}`
    );
  }
}
