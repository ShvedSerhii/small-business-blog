import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LoginModel } from './login.model';
import LoginForm from './login.form';
import { LoginService } from '../../services/login.service'


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
  constructor( private loginService: LoginService) {
    this.model = new LoginModel();
    this.form = new LoginForm(this.model);
    this.success = {};
  }

  onSubmit(form){
    this.loginService.loginUser((data) => {
      console.log('data', data)
      this.data = data;
      this.loginService.setData(data);
    }, {name: 'test', password: 'admin'})

    // const myHeaders = new HttpHeaders();
    // myHeaders.set("key", "Content-Type");
    // myHeaders.set("name", "Content-Type");
    // myHeaders.set("value", "application/json");
    // myHeaders.set("type", "text");
    // this.http.post('https://lectorium.herokuapp.com/api/login/', {"name": 'test', "password": 'admin'}, {headers: myHeaders})
    //   .subscribe((response) => {
    //     this.response = response;
    //     console.log(response);
    //   }, error => console.log(error))
    // //console.log(form.value)
  }

}
