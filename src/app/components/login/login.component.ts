import { Component } from '@angular/core';
import { LoginModel } from './login.model';
import LoginForm from './login.form';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public success: any;
  private model: LoginModel;
  public form: LoginForm;
  data: any;
  constructor(private loginService: LoginService) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
    this.success = {};
  }

  onSubmit(form) {
    this.loginService.loginUser(data => {
      console.log('data', data);
      this.data = data;
      this.loginService.setData(data);
    }, `{"name": "${form.value.email}", "password": "${form.value.password}"}`);
  }
}
