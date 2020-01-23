import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from '../../services/login.service';
import { CookiesService } from '../../services/cookies.service';
import LoginForm from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: LoginModel;
  public form: LoginForm;
  constructor(
    private loginService: LoginService,
    private cookie: CookiesService
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  isAuthorization() {
    if (!this.cookie.getCookie('token')) { return true; }
    return false;
  }
  logout() {
    this.cookie.deleteCookie('token');
  }

  onSubmit(form) {
    this.loginService.loginUser(data => {
      console.log('data', data);
      form.reset();
    }, `{"name": "${form.value.email}", "password": "${form.value.password}"}`);
  }
}
