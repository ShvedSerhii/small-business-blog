import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { CookiesService } from '../../services/cookies/cookies.service';
import LoginForm from './login.form';
import { Router } from '@angular/router';
import { BusService } from 'src/app/services/bus/bus.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: LoginModel;
  public form: LoginForm;
  constructor(
    public loginService: LoginService,
    public cookie: CookiesService,
    private router: Router,
    private bus: BusService
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  public logout(): void {
    this.cookie.deleteCookie('token');
  }

  public onSubmit(form): void {
    this.bus.publish('login', data => {
      console.log('data', data);
      this.router.navigate(['/home']);
    }, 
     {name: form.value.email, password: form.value.password});
  }
} 
 