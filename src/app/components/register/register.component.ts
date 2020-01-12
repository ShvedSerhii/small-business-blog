import { Component, OnInit } from '@angular/core';


import { RegisterModel } from './register.model';
import RegisterForm from './register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private model: RegisterModel;
  public form: RegisterForm;
  constructor() {
    this.model = new RegisterModel();
    this.form = new RegisterForm(this.model);
  }

  ngOnInit() {
  }

}
