import { Component, OnInit } from '@angular/core';

import { LoginModel } from './login.model';
import LoginForm from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private model: LoginModel;
  public form: LoginForm;
  constructor() {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
  }

  ngOnInit() {
  }

  // public inputPassword(event: any): void {
  //   // this.form.formGroup.setValue({
  //   //   password: event.target.value,
  //   //   firstName: '',
  //   //   lastName: '',
  //   //   email: ''
  //   // });

  //   this.form.formGroup.patchValue({
  //     password: event.target.value
  //   });
  // }

}
