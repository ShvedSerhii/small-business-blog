import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from '../../services/login/login.service';
import { CookiesService } from '../../services/cookies/cookies.service';
import LoginForm from './login.form';
import { Router } from '@angular/router';

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
    public cookie: CookiesService,
    private router: Router
  ) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  public logout(): void {
    this.cookie.deleteCookie('token');
  }

  public onSubmit(form): void {
    this.loginService.loginUser(data => {
      console.log('data', data);
      this.router.navigate(['/home']);
    }, {name: form.value.email, password: form.value.password});
  }
}
