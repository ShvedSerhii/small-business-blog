import { Component } from '@angular/core';
import { RegistrationService } from '../../services/registration/registration.service';
import { RegisterModel } from './register.model';
import RegisterForm from './register.form';
import { Router } from '@angular/router';
import { BusService } from 'src/app/services/bus/bus.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public model: RegisterModel;
  public form: RegisterForm;
  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private bus: BusService
  ) {
    this.model = new RegisterModel();
    this.form = new RegisterForm(this.model);
  }

  public onSubmit(form): void {
    this.bus.publish(
      'register',
      data => {
        console.log('data', data);
        this.router.navigate(['/home']);
      },
      {
        name: form.value.name,
        surname: form.value.surname,
        email: form.value.email,
        phone: form.value.phone,
        password: form.value.password
      }
    );
  }
}
